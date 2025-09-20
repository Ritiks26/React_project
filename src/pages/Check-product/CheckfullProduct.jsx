import { Header } from "../../Components/Header";
import "./CheckfullProduct.css";
import { useParams, useNavigate } from "react-router";
import { useState } from "react";
import rightChevron from "../../assets/rightslider.svg";
import leftChevron from "../../assets/leftslider.svg";
import {
  products,
  productsMore,
  productsMoreLast,
} from "../../../data/products";
import { formatMoney } from "../utils/money";

export function CheckfullProduct({ cart, setCart, totalQuantity }) {
  const [quantity, setQuantity] = useState(0);
  const [selectedSize, setSelectedSize] = useState(null);
  const [selectedColour, setselectedColour] = useState(null);
  const [showSizeMessage, setShowSizeMessage] = useState(false);
  const [showColourMessage, setShowColourMessage] = useState(false);
  const [showQuantityMessage, setShowQuantityMessage] = useState(false);
  const { productId } = useParams();
  const navigate = useNavigate();

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  const decreaseQuantity = () => {
    if (quantity <= 0) return;
    setQuantity(quantity - 1);
  };

  let cartQuantity = 0;
  cart.map((cartItems) => {
    cartQuantity += cartItems.quantity;
  });

  const addToCart = () => {
    console.log("addtocart-", selectedSize, selectedColour, quantity);

    if (!selectedSize) {
      setShowSizeMessage(true);

      setTimeout(() => {
        setShowSizeMessage(false);
      }, 3000);

      return;
    }

    if (!selectedColour) {
      setShowColourMessage(true);

      setTimeout(() => {
        setShowColourMessage(false);
      }, 3000);

      return;
    }

    if (!quantity) {
      setShowQuantityMessage(true);

      setTimeout(() => {
        setShowQuantityMessage(false);
      }, 3000);

      return;
    }

    // setCart((cart) => [...cart, cartItems]);

    setCart((cart) => {
      console.log(" current cart:", cart);
      const existingItemIndex = cart.findIndex(
        (items) =>
          items.productId === productId &&
          items.size === selectedSize &&
          items.colour === selectedColour
      );

      if (existingItemIndex !== -1) {
        const updatedCart = [...cart];
        updatedCart[existingItemIndex].quantity += quantity;
        console.log(updatedCart[existingItemIndex]);

        return updatedCart;
      } else {
        const cartItems = {
          productName: matchingProduct.name,
          productId: productId,
          image: matchingProduct.image,
          size: selectedSize,
          colour: selectedColour,
          quantity: quantity,
          priceRupees: matchingProduct.priceRupees,
        };
        return [...cart, cartItems];
      }
    });

    navigate("/checkout");
  };

  const allProducts = [...products, ...productsMore, ...productsMoreLast];

  let matchingProduct = allProducts.find((product) => product.id === productId);

  return (
    <>
      <title>Product</title>
      <Header totalQuantity={totalQuantity} />
      <div className="full-products-container">
        <div className="product-image">
          <img src={matchingProduct.image} alt="" />
          {/* <div className="right-slider">
            <img src={"/"} />
          </div>

          <div className="left-slider">
            <img src={"/"} />
          </div> */}
        </div>
        <div className="product-details">
          <div className="product-name">
            <h1>{matchingProduct.name}</h1>
          </div>
          <div className="product-description">
            <p>{matchingProduct.description}</p>
          </div>

          <div className="product-price-rating">
            <div className="price">
              <strong>{formatMoney(matchingProduct.priceRupees)}</strong>
            </div>

            <div className="rating-stars">
              <img
                style={{ height: "18px", marginRight: "0.5rem" }}
                src="https://cdn-icons-png.flaticon.com/128/1828/1828884.png"
                alt=""
              />{" "}
              {matchingProduct.rating} stars ({matchingProduct.review} reviews)
            </div>
          </div>

          <hr />

          <div className="selection-container">
            <div className="size-selection-container">
              SIZE:
              <div className="select-size">
                {["S", "M", "L", "XL", "XXL"].map((size) => (
                  <div
                    key={size}
                    className={`size-selection ${
                      selectedSize === size ? "active" : ""
                    }`}
                    onClick={() => setSelectedSize(size)}
                  >
                    {size}
                  </div>
                ))}
              </div>
            </div>

            <div className="colour-selection-container">
              COLOUR:
              <div className="select-colour">
                {["white", "black", "dusty-rose"].map((color) => (
                  <div
                    key={color}
                    className={`colour-selection ${color} ${
                      selectedColour === color ? "active" : ""
                    }`}
                    onClick={() => setselectedColour(color)}
                  ></div>
                ))}
              </div>
            </div>
          </div>

          <div className="add-to-cart-quantity">
            <div className="quantity-selection">
              <div className="decrease-quantity" onClick={decreaseQuantity}>
                -
              </div>
              <div className="quantity-count">{quantity}</div>
              <div className="increase-quantity" onClick={increaseQuantity}>
                +
              </div>
            </div>
            <div className="cart-button" onClick={addToCart}>
              <button>ADD TO CART</button>
            </div>
          </div>
        </div>
        {showSizeMessage && (
          <div className="size-message-content">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="red"
              class="bi bi-exclamation-circle"
              viewBox="0 0 16 16"
            >
              <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
              <path d="M7.002 11a1 1 0 1 1 2 0 1 1 0 0 1-2 0M7.1 4.995a.905.905 0 1 1 1.8 0l-.35 3.507a.552.552 0 0 1-1.1 0z" />
            </svg>
            <p>Select a size</p>
          </div>
        )}
        {showColourMessage && (
          <div className="color-message-content">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="red"
              class="bi bi-exclamation-circle"
              viewBox="0 0 16 16"
            >
              <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
              <path d="M7.002 11a1 1 0 1 1 2 0 1 1 0 0 1-2 0M7.1 4.995a.905.905 0 1 1 1.8 0l-.35 3.507a.552.552 0 0 1-1.1 0z" />
            </svg>
            <p>Select a colour</p>
          </div>
        )}
        {showQuantityMessage && (
          <div className="quantity-message-content">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="red"
              class="bi bi-exclamation-circle"
              viewBox="0 0 16 16"
            >
              <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
              <path d="M7.002 11a1 1 0 1 1 2 0 1 1 0 0 1-2 0M7.1 4.995a.905.905 0 1 1 1.8 0l-.35 3.507a.552.552 0 0 1-1.1 0z" />
            </svg>
            <p>Select a quantity</p>
          </div>
        )}
      </div>
    </>
  );
}
