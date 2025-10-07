import { Header } from "../../Components/Header";
import axios from "axios";
import { useParams, useNavigate } from "react-router";
import { useState, useEffect } from "react";
import rightChevron from "../../assets/rightslider.svg";
import leftChevron from "../../assets/leftslider.svg";
import { formatMoney } from "../utils/money";
import "./CheckfullProduct.css";

export function CheckfullProduct({
  cart,
  totalQuantity,
  loadCart,
  products,
  productsMore,
  productsMoreLast,
}) {
  const [quantity, setQuantity] = useState(0);
  const [selectedSize, setSelectedSize] = useState(null);
  const [selectedColour, setSelectedColour] = useState();
  const [showSizeMessage, setShowSizeMessage] = useState(false);
  const [showColourMessage, setShowColourMessage] = useState(false);
  const [showQuantityMessage, setShowQuantityMessage] = useState(false);
  const [changeProductColor, setChangeProductColor] = useState(0);
  const [slider, setSlider] = useState(0);
  const { productId } = useParams();
  const navigate = useNavigate();

  const rightSlide = (image) => {
    setSlider((prev) => (prev + 1) % image.length);
  };

  const leftSlide = (image) => {
    setSlider((prev) => (prev - 1 + image.length) % image.length);
  };

  const slideImageBack = () => {
    setSlider(0);
  };

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

  const addToCart = async () => {
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

    await axios.post("https://react-products-backend-obvl.onrender.com/cart", {
      productId: matchingProduct.id,
      quantity,
      color: selectedColour,
      size: selectedSize,
      image: matchingProduct.colors[changeProductColor].image,
    });
    await loadCart();

    navigate("/checkout");
  };

  const allProducts = [...products, ...productsMore, ...productsMoreLast];

  let matchingProduct = allProducts.find((product) => product.id === productId);

  useEffect(() => {
    if (matchingProduct && matchingProduct.colors?.length > 0) {
      setSelectedColour(matchingProduct.colors[0].name);
      setChangeProductColor(0);
    }
  }, [matchingProduct]);

  if (!matchingProduct) {
    return <div style={{ fontFamily: "general sans" }}>Loading Product...</div>;
  }

  return (
    <>
      <title>Product</title>
      <Header
        totalQuantity={totalQuantity}
        products={products}
        productsMore={productsMore}
        productsMoreLast={productsMoreLast}
      />
      <div className="full-products-container">
        <div className="product-image">
          <img
            src={
              matchingProduct.colors
                ? matchingProduct.colors[changeProductColor].image[slider]
                : "no image"
            }
            alt=""
          />
          <div
            className="right-slider"
            onClick={() => {
              rightSlide(matchingProduct.colors[changeProductColor].image);
            }}
          >
            <img src={rightChevron} />
          </div>

          <div
            className="left-slider"
            onClick={() => {
              leftSlide(matchingProduct.colors[changeProductColor].image);
            }}
          >
            <img src={leftChevron} />
          </div>
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
                {matchingProduct.sizes.map((size) => (
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
                {matchingProduct.colors.map((color, index) => (
                  <div
                    key={color.name}
                    className={`colour-selection ${color.name} ${
                      selectedColour === color.name ? "active" : ""
                    }`}
                    onClick={() => {
                      setSelectedColour(color.name);
                      setChangeProductColor(index);
                    }}
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
