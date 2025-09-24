// import express from "express";
// import cors from "cors";
// import fs from "fs";

// const app = express();
// const PORT = 9000;

// app.use(cors());
// app.use(express.json());

// // Load products & cart
// const products = JSON.parse(fs.readFileSync("products.json", "utf-8")).products;
// let cart = JSON.parse(fs.readFileSync("cart.json", "utf-8")).cart; // let because cart will be updated

// // --- GET all products ---
// app.get("/products", (req, res) => {
//   res.json(products);
// });

// // --- GET cart (with optional ?expand=products) ---
// app.get("/cart", (req, res) => {
//   const expand = req.query.expand;

//   if (expand === "products") {
//     const cartWithProducts = cart.map((item) => {
//       const product = products.find((p) => p.id === item.id);
//       return { ...item, product };
//     });
//     return res.json(cartWithProducts);
//   }

//   res.json(cart);
// });

// // --- POST add to cart ---
// app.post("/cart", (req, res) => {
//   const { productId, quantity } = req.body;

//   if (!productId || !quantity) {
//     return res.status(400).json({ message: "ProductId and quantity required" });
//   }

//   const existingItem = cart.find((item) => item.id === productId);

//   if (existingItem) {
//     existingItem.quantity += quantity;
//   } else {
//     cart.push({ id: productId, quantity: quantity });
//   }

//   fs.writeFileSync("cart.json", JSON.stringify({ cart }, null, 2));
//   res.status(201).json({ message: "Added to cart", cart });
// });

// // --- PUT update cart item quantity ---
// app.put("/cart/:productId", (req, res) => {
//   const { productId } = req.params;
//   const { quantity } = req.body;

//   const item = cart.find((item) => item.id === productId);
//   if (!item) {
//     return res.status(404).json({ message: "Item not found in cart" });
//   }

//   item.quantity = quantity;

//   fs.writeFileSync("cart.json", JSON.stringify({ cart }, null, 2));
//   res.json({ message: "Cart updated", cart });
// });

// // --- DELETE remove single item from cart ---
// app.delete("/cart/:productId", (req, res) => {
//   const { productId } = req.params;

//   const index = cart.findIndex((item) => item.id === productId);
//   if (index === -1) {
//     return res.status(404).json({ message: "Item not found in cart" });
//   }

//   cart.splice(index, 1);

//   fs.writeFileSync("cart.json", JSON.stringify({ cart }, null, 2));
//   res.json({ message: "Item removed", cart });
// });

// // --- DELETE all items from cart ---
// app.delete("/cart", (req, res) => {
//   cart = [];
//   fs.writeFileSync("cart.json", JSON.stringify({ cart }, null, 2));
//   res.json({ message: "All items removed", cart });
// });

// app.listen(PORT, () => {
//   console.log(`Server running at http://localhost:${PORT}`);
// });

import express from "express";
import cors from "cors";
import fs from "fs";

const app = express();
const PORT = 9000;

app.use(cors());
app.use(express.json());

// Load products & cart
const products = JSON.parse(fs.readFileSync("products.json", "utf-8")).products;
let cart = JSON.parse(fs.readFileSync("cart.json", "utf-8")).cart; // let because cart will be updated

// --- GET all products ---
app.get("/products", (req, res) => {
  res.json(products);
});

// --- GET cart (with optional ?expand=products) ---
app.get("/cart", (req, res) => {
  const expand = req.query.expand;

  if (expand === "products") {
    const cartWithProducts = cart.map((item) => {
      const product = products.find((p) => p.id === item.id);
      return { ...item, product };
    });
    return res.json(cartWithProducts);
  }

  res.json(cart);
});

// --- POST add to cart ---
app.post("/cart", (req, res) => {
  const { productId, quantity, color, size } = req.body;

  if (!productId || !quantity) {
    return res.status(400).json({ message: "ProductId and quantity required" });
  }

  // same productId + color + size check
  const existingItem = cart.find(
    (item) =>
      item.id === productId && item.color === color && item.size === size
  );

  if (existingItem) {
    existingItem.quantity += quantity;
  } else {
    cart.push({ id: productId, quantity, color, size });
  }

  fs.writeFileSync("cart.json", JSON.stringify({ cart }, null, 2));
  res.status(201).json({ message: "Added to cart", cart });
});

// --- PUT update cart item quantity ---
app.put("/cart/:productId", (req, res) => {
  const { productId } = req.params;
  const { quantity, color, size } = req.body;

  const item = cart.find(
    (item) =>
      item.id === productId && item.color === color && item.size === size
  );

  if (!item) {
    return res.status(404).json({ message: "Item not found in cart" });
  }

  item.quantity = quantity;

  fs.writeFileSync("cart.json", JSON.stringify({ cart }, null, 2));
  res.json({ message: "Cart updated", cart });
});

// --- DELETE remove single item from cart ---
app.delete("/cart/:productId", (req, res) => {
  const { productId } = req.params;
  const { color, size } = req.query; // color, size ko query params me bhej sakte ho

  const index = cart.findIndex(
    (item) =>
      item.id === productId &&
      (color ? item.color === color : true) &&
      (size ? item.size === size : true)
  );

  if (index === -1) {
    return res.status(404).json({ message: "Item not found in cart" });
  }

  cart.splice(index, 1);

  fs.writeFileSync("cart.json", JSON.stringify({ cart }, null, 2));
  res.json({ message: "Item removed", cart });
});

// --- DELETE all items from cart ---
app.delete("/cart", (req, res) => {
  cart = [];
  fs.writeFileSync("cart.json", JSON.stringify({ cart }, null, 2));
  res.json({ message: "All items removed", cart });
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
