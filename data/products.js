export function getProduct(productId) {
  let matchingProduct;

  products.forEach((product) => {
    if (product.id === productId) {
      matchingProduct = product;
    }
  });

  return matchingProduct;
}

export const products = [
  {
    id: "001",
    name: "4007 QUARTER ZIP SWEATSHIRT",
    image:
      "https://www.houseofblanks.com/cdn/shop/files/QuarterZip_Black_01.jpg?v=1737052391&width=823",
    color: "Black",
    priceRupees: 6999,
    rating: "4.5",
    review: 293,
    description:
      "A modern essential with a sleek quarter-zip design, warm fabric, and relaxed fit – perfect for layering or casual wear.",
  },
  {
    id: "002",
    name: "3013 RELAXED FIT FLEECE HOODED SWEATSHIRT",
    image:
      "https://www.houseofblanks.com/cdn/shop/files/PullOver_HeatherGrey_01.jpg?v=1732917072&width=823",
    color: "White",
    priceRupees: 4599,
    rating: "5",
    review: 153,
    description:
      "Stay stylish and comfortable with soft fleece fabric, minimal design, and a cozy hood – ideal for everyday wear.",
  },
  {
    id: "003",
    name: "1012 RELAXED FIT T-SHIRT",
    image:
      "https://www.houseofblanks.com/cdn/shop/files/TShirt_Black_01.jpg?v=1732911152&width=823",
    color: "Black",
    priceRupees: 2100,
    rating: "4.1",
    review: 783,
    description:
      "Lightweight and breathable, this relaxed-fit tee offers all-day comfort with a classic minimalist look.",
  },
  {
    id: "004",
    name: "3010 RELAXED FIT PULLOVER HOODED SWEATSHIRT",
    image:
      "https://www.houseofblanks.com/cdn/shop/files/RelaxedFitPullover_ForestGreen_01_1.jpg?v=1726671087&width=823",
    color: "Forest Green",
    priceRupees: 5400,
    rating: "4",
    review: 793,
    description:
      "A casual pullover hoodie with a relaxed fit, warm interior, and timeless style – perfect for layering in any season.",
  },
  {
    id: "005",
    name: "1012 RELAXED FIT T-SHIRT",
    image:
      "https://www.houseofblanks.com/cdn/shop/files/TShirt_HeatherGrey_01.jpg?v=1732911344&width=823",
    color: "Heather Grey",
    priceRupees: 2549,
    rating: "3.8",
    review: 541,
    description:
      "Simple, versatile, and ultra-comfy – this heather grey tee is made for effortless everyday styling.",
  },
  {
    id: "006",
    name: "1009 HEAVYWEIGHT T-SHIRT",
    image:
      "https://www.houseofblanks.com/cdn/shop/files/HeavyweightTshirt_Red_01.jpg?v=1726516718&width=823",
    color: "Red",
    priceRupees: 1949,
    rating: "4.9",
    review: "1.2k",
    description:
      "Crafted with durable heavyweight cotton, this bold red tee combines comfort with a sturdy, long-lasting build.",
  },
  {
    id: "007",
    name: "4004 CLASSIC CREWNECK",
    image:
      "https://www.houseofblanks.com/cdn/shop/files/ClassicCrewneck_Black_01.jpg?v=1726237764&width=360",
    color: "Navy",
    priceRupees: 3149,
    rating: "4.1",
    review: 653,
    description:
      "A timeless crewneck sweatshirt made from soft, durable fabric – perfect for layering or casual wear.",
  },
  {
    id: "008",
    name: "3010 RELAXED FIT FRENCH TERRY HOODED SWEATSHIRT",
    image:
      "https://www.houseofblanks.com/cdn/shop/files/RelaxedFitPullover_ChocolateBrown_01_2.jpg?v=1726670853&width=360",
    color: "Chocolate Brown",
    priceRupees: 4200,
    rating: "4",
    review: 893,
    description:
      "Made with soft French terry fabric, this hoodie brings warmth and comfort with a stylish chocolate brown finish.",
  },
];

export const productsMore = [
  {
    id: "009",
    name: "7004 CLASSIC SWEATPANT",
    image:
      "https://houseofblanks.s3.ca-central-1.amazonaws.com/products/1748790306_683c6c225523b.jpg",
    color: "Blue",
    priceRupees: 9999,
  },
  {
    id: "010",
    name: "7004 CLASSIC SWEATPANT",
    image:
      "https://houseofblanks.s3.ca-central-1.amazonaws.com/products/1748790340_683c6c442d009.jpg",
    color: "Heather Grey",
    priceRupees: 8999,
  },
  {
    id: "011",
    name: "3013 RELAXED FIT FLEECE HOODIE",
    image:
      "https://houseofblanks.s3.ca-central-1.amazonaws.com/products/1748878892_683dc62cc9a42.jpg",
    color: "Dusty Rose",
    priceRupees: 7499,
  },
  {
    id: "012",
    name: "1009 CLASSIC HEAVYWEIGHT T-SHIRT",
    image:
      "https://houseofblanks.s3.ca-central-1.amazonaws.com/products/1748788940_683c66ccb8b5b.jpg",
    color: "Olive Drab",
    priceRupees: 3499,
  },
];

export const productsMoreLast = [
  {
    id: "013",
    name: "7004 CLASSIC SWEATPANT",
    image:
      "https://houseofblanks.s3.ca-central-1.amazonaws.com/products/1748790306_683c6c225523b.jpg",
    color: "Blue",
    priceRupees: 9999,
  },
  {
    id: "014",
    name: "7004 CLASSIC SWEATPANT",
    image:
      "https://houseofblanks.s3.ca-central-1.amazonaws.com/products/1748790340_683c6c442d009.jpg",
    color: "Heather Grey",
    priceRupees: 8999,
  },
  {
    id: "015",
    name: "3013 RELAXED FIT FLEECE HOODIE",
    image:
      "https://houseofblanks.s3.ca-central-1.amazonaws.com/products/1748878892_683dc62cc9a42.jpg",
    color: "Dusty Rose",
    priceRupees: 7499,
  },
  {
    id: "016",
    name: "1009 CLASSIC HEAVYWEIGHT T-SHIRT",
    image:
      "https://houseofblanks.s3.ca-central-1.amazonaws.com/products/1748788940_683c66ccb8b5b.jpg",
    color: "Olive Drab",
    priceRupees: 3499,
  },
];
