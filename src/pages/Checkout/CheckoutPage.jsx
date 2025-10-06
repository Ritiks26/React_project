import { formatMoney } from "../utils/money";
import { Link } from "react-router";
import { Header } from "../../Components/Header";
import "./CheckoutPage.css";
import axios from "axios";

export function CheckoutPage({
  cart,
  totalQuantity,
  loadCart,
  products,
  productsMore,
  productsMoreLast,
}) {
  let productCost = 0;
  let discount = 0;
  let tax = 0;
  let totalCost = 0;

  cart.map((cartItems) => {
    productCost += cartItems.product.priceRupees * cartItems.quantity;
    discount = productCost * discount;
    tax = productCost * 0.12;
    totalCost = productCost - discount + tax;
  });

  const updateQuantity = async (id, quantity, colour, size) => {
    if (quantity <= 0) {
      await axios.delete(
        `http://localhost:9000/cart/${id}?colour=${colour}&size=${size}`
      );
    } else {
      await axios.put(`http://localhost:9000/cart/${id}`, {
        quantity: quantity,
        color: colour,
        size: size,
      });
    }
    await loadCart();
  };

  return (
    <>
      <title>Checkout</title>

      <Header
        totalQuantity={totalQuantity}
        products={products}
        productsMore={productsMore}
        productsMoreLast={productsMoreLast}
      />

      <div className="checkout-container">
        <div className="cart-count">
          <h2>
            Your Cart: {totalQuantity} {totalQuantity === 1 ? "item" : "items"}
          </h2>
        </div>

        {cart.length === 0 ? (
          <div className="empty-cart-message">
            <div className="empty-cart-message-picture">
              <img
                src="https://www.svgrepo.com/show/43071/shopping-bag.svg"
                alt=""
              />
            </div>
            <h1>Cart is empty!</h1>
            <div>
              <Link className="move-to-home" to={"/"}>
                Shop Now {">"}
              </Link>
            </div>
          </div>
        ) : (
          <div className="cart-payment-summary">
            <div className="cart-container">
              {cart.map((cartItems) => (
                <div
                  key={`${cartItems.id}-${cartItems.color}-${cartItems.size}`}
                  className="cart-detail-combine"
                >
                  <div className="cart-summary">
                    <div className="cart-product-image">
                      <img src={cartItems.product.image} />
                    </div>
                    <div className="cart-item-detail">
                      <p className="cart-product-name">
                        {cartItems.product.name}
                      </p>

                      <div className="product-quick-details">
                        <div className="quick-size-detail">
                          <div className="size-option">SIZE:</div>
                          <div className="size-value">
                            {cartItems.size.toUpperCase()}
                          </div>
                        </div>

                        <div className="quick-colour-detail">
                          <div className="colour-option">COLOUR:</div>
                          <div className="colour-value">
                            {cartItems.color.toUpperCase()}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="last-cart-detail">
                    <div className="product-price-container">
                      <p className="product-price">
                        {formatMoney(cartItems.product.priceRupees)}
                      </p>
                    </div>

                    <div className="quick-quantity-detail">
                      <div className="quantity-option">QUANTITY:</div>
                      <div className="quantity-value">
                        <div className="edit-quantity">
                          <div
                            className="decrease-quick-quantity"
                            onClick={() => {
                              updateQuantity(
                                cartItems.id,
                                cartItems.quantity - 1,
                                cartItems.color,
                                cartItems.size
                              );
                            }}
                          >
                            -
                          </div>
                          {cartItems.quantity}
                          <div
                            className="increase-quick-quantity"
                            onClick={() => {
                              updateQuantity(
                                cartItems.id,
                                cartItems.quantity + 1,
                                cartItems.color,
                                cartItems.size
                              );
                            }}
                          >
                            +
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="payment-container">
              <h3>Summary</h3>
              <div className="price-calculation">
                <div className="item-cost">
                  <div>
                    Total: ({totalQuantity}{" "}
                    {totalQuantity === 1 ? "item" : "items"} ){" "}
                  </div>
                  <div>{formatMoney(productCost)}</div>
                </div>

                <div className="calculate-discount">
                  <div>
                    Discount: (%)
                    <p className="coupon-link js-coupon-link">apply coupon</p>
                  </div>
                  <div>{formatMoney(discount)}</div>
                </div>

                <div className="calculate-tax">
                  <div>Tax: (12%)</div>
                  <div>{formatMoney(tax)}</div>
                </div>

                <div className="final-total-cost">
                  <div>Total:</div>
                  <div>{formatMoney(totalCost)}</div>
                </div>

                <div className="checkout-button">
                  <button>checkout</button>
                </div>
              </div>
            </div>
          </div>
        )}

        <div className="confirmation-box js-confirmation-box"></div>
      </div>
    </>
  );
}
