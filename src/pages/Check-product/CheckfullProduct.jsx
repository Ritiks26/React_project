import { Header } from "../../Components/Header";
import { SkeletonLoading } from "./SkeletonLoading";
import axios from "axios";
import { useParams, useNavigate } from "react-router";
import { useState, useEffect } from "react";
import { formatMoney } from "../utils/money";
import { ProductInfoAccordion } from "./ProductInfoAccordion";
import { SuggestedProducts } from "./SuggestedProducts";
import { Footer } from "../../Components/Footer";
import "./CheckfullProduct.css";

export function CheckfullProduct({
  cart,
  totalQuantity,
  loadCart,
  products,
  productsMore,
  productsMoreLast,
  newArrivals,
}) {
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState(null);
  const [selectedColour, setSelectedColour] = useState();
  const [showSizeMessage, setShowSizeMessage] = useState(false);
  const [showColourMessage, setShowColourMessage] = useState(false);
  const [changeProductColor, setChangeProductColor] = useState(0);
  const [slider, setSlider] = useState(0);
  const { productId } = useParams();
  const navigate = useNavigate();

  const rightSlide = (image) => {
    setSlider((prev) => {
      if (prev < image.length - 1) {
        return prev + 1; // sirf aage badhega agar last image se pehle hai
      }
      return prev; // agar last image hai to wahi ruk jaayega
    });
  };

  const leftSlide = (image) => {
    setSlider((prev) => {
      if (prev > 0) {
        return prev - 1; // sirf peeche aayega agar first se aage hai
      }
      return prev; // first image par koi aur action nahi
    });
  };

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  const decreaseQuantity = () => {
    if (quantity <= 1) return;
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

  const allProducts = [
    ...products,
    ...productsMore,
    ...productsMoreLast,
    ...newArrivals,
  ];

  let matchingProduct = allProducts.find((product) => product.id === productId);

  useEffect(() => {
    if (matchingProduct && matchingProduct.colors?.length > 0) {
      setSelectedColour(matchingProduct.colors[0].name);
      setChangeProductColor(0);
    }
  }, [matchingProduct]);

  if (!matchingProduct) {
    return <SkeletonLoading />;
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
        <div className="matchingProduct-image">
          <div
            className="images-wrapper"
            style={{ transform: `translateX(-${slider * 100}%)` }}
          >
            {matchingProduct.colors[changeProductColor].image.map(
              (url, index) => (
                <img key={index} src={url} alt={`product ${index}`} />
              )
            )}
          </div>
          <div className="slider">
            <div
              className="left-slider"
              onClick={() => {
                leftSlide(matchingProduct.colors[changeProductColor].image);
              }}
            >
              <svg
                aria-hidden="true"
                focusable="false"
                className="icon-left"
                viewBox="0 0 10 6"
                height="20px"
                width="20px"
              >
                <path
                  d="M9.354.646a.5.5 0 00-.708 0L5 4.293 1.354.646a.5.5 0 00-.708.708l4 4a.5.5 0 00.708 0l4-4a.5.5 0 000-.708z"
                  fill="gray"
                ></path>
              </svg>
            </div>

            <div className="products-out-of-count">
              {slider + 1}/
              {matchingProduct.colors[changeProductColor].image.length}
            </div>

            <div
              className="right-slider"
              onClick={() => {
                rightSlide(matchingProduct.colors[changeProductColor].image);
              }}
            >
              <svg
                aria-hidden="true"
                focusable="false"
                className="icon-right"
                viewBox="0 0 10 6"
                height="20px"
                width="20px"
              >
                <path
                  d="M9.354.646a.5.5 0 00-.708 0L5 4.293 1.354.646a.5.5 0 00-.708.708l4 4a.5.5 0 00.708 0l4-4a.5.5 0 000-.708z"
                  fill="gray"
                ></path>
              </svg>
            </div>
          </div>
        </div>
        <div className="matchingProduct-details">
          <div className="first-detail-column">
            <div className="matchingProduct-name">
              <h1>{matchingProduct.name}</h1>
            </div>
            <div className="selected-product-color">
              {selectedColour?.toUpperCase()}
            </div>
            <div className="matchingProduct-price">
              <div className="price">
                <strong>{formatMoney(matchingProduct.priceRupees)}</strong>
              </div>
            </div>
          </div>

          <div className="second-detail-column">
            <div className="selection-container">
              <div className="colour-selection-container">
                COLOUR <span>{selectedColour?.toUpperCase()}</span>
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
              <div className="size-selection-container">
                SIZE
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
      </div>
      <ProductInfoAccordion />
      <SuggestedProducts allProducts={allProducts} />
      <Footer />
    </>
  );
}
