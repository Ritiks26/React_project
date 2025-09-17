import { formatMoney } from "../utils/money";
import { Link } from "react-router";
import { Header } from "../../Components/Header";
import "./CheckoutPage.css";

export function CheckoutPage({ cart, setCart, totalQuantity }) {
  const increaseQuantity = (productId, size, colour) => {
    setCart((cart) =>
      cart.map((cartItems) =>
        cartItems.productId === productId &&
        cartItems.size === size &&
        cartItems.colour === colour
          ? { ...cartItems, quantity: cartItems.quantity + 1 }
          : cartItems
      )
    );
  };

  const decreaseQuantity = (productId, size, colour) => {
    setCart((cart) =>
      cart
        .map((cartItems) =>
          cartItems.productId === productId &&
          cartItems.size === size &&
          cartItems.colour === colour
            ? { ...cartItems, quantity: cartItems.quantity - 1 }
            : cartItems
        )
        .filter((cartItem) => cartItem.quantity > 0)
    );
  };

  let productCost = 0;
  let discount = 0;
  let tax = 0;
  let totalCost = 0;

  cart.map((cartItems) => {
    productCost += cartItems.priceRupees * cartItems.quantity;
    discount = productCost * discount;
    tax = productCost * 0.12;
    totalCost = productCost - discount + tax;
  });

  return (
    <>
      <title>Checkout</title>

      <Header totalQuantity={totalQuantity} />

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
                  key={cartItems.productName}
                  className="cart-detail-combine"
                >
                  <div className="cart-summary">
                    <div className="cart-product-image">
                      <img src={cartItems.image} />
                    </div>
                    <div className="cart-item-detail">
                      <p className="cart-product-name">
                        {cartItems.productName}
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
                            {cartItems.colour.toUpperCase()}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="last-cart-detail">
                    <div className="product-price-container">
                      <p className="product-price">
                        {formatMoney(cartItems.priceRupees)}
                      </p>
                    </div>

                    <div className="quick-quantity-detail">
                      <div className="quantity-option">QUANTITY:</div>
                      <div className="quantity-value">
                        <div className="edit-quantity">
                          <div
                            className="decrease-quick-quantity"
                            onClick={() =>
                              decreaseQuantity(
                                cartItems.productId,
                                cartItems.size,
                                cartItems.colour
                              )
                            }
                          >
                            -
                          </div>
                          {cartItems.quantity}
                          <div
                            className="increase-quick-quantity"
                            onClick={() =>
                              increaseQuantity(
                                cartItems.productId,
                                cartItems.size,
                                cartItems.colour
                              )
                            }
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
                  <div>Total: (3 Items) </div>
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

// import { formatMoney } from "../utils/money";
// import { Link } from "react-router";
// import { Header } from "../../Components/Header";
// import "./CheckoutPage.css";

// export function CheckoutPage({ cart, setCart, totalQuantity }) {
//   const increaseQuantity = (productId, size, colour) => {
//     setCart((cart) =>
//       cart.map((cartItems) =>
//         cartItems.productId === productId &&
//         cartItems.size === size &&
//         cartItems.colour === colour
//           ? { ...cartItems, quantity: cartItems.quantity + 1 }
//           : cartItems
//       )
//     );
//   };

//   const decreaseQuantity = (productId, size, colour) => {
//     setCart((cart) =>
//       cart
//         .map((cartItems) =>
//           cartItems.productId === productId &&
//           cartItems.size === size &&
//           cartItems.colour === colour
//             ? { ...cartItems, quantity: cartItems.quantity - 1 }
//             : cartItems
//         )
//         .filter((cartItem) => cartItem.quantity > 0)
//     );
//   };

//   return (
//     <>
//       <title>Checkout</title>

//       <Header totalQuantity={totalQuantity} />

//       <div className="checkout-container">
//         <div className="cart-count">
//           <h2>
//             Your Cart: {totalQuantity} {totalQuantity === 1 ? "item" : "items"}
//           </h2>
//         </div>

//         {cart.length === 0 ? (
//           <div className="empty-cart-message">
//             <div className="empty-cart-message-picture">
//               <img
//                 src="https://www.svgrepo.com/show/43071/shopping-bag.svg"
//                 alt=""
//               />
//             </div>
//             <h1>Cart is empty!</h1>
//             <div>
//               <Link className="move-to-home" to={"/"}>
//                 Shop Now {">"}
//               </Link>
//             </div>
//           </div>
//         ) : (
//           <div className="cart-payment-summary">
//             {/* Cart items list */}
//             <div className="cart-container">
//               {cart.map((cartItems) => (
//                 <div
//                   key={cartItems.productName}
//                   className="cart-detail-combine"
//                 >
//                   <div className="cart-summary">
//                     <div className="cart-product-image">
//                       <img src={cartItems.image} />
//                     </div>
//                     <div className="cart-item-detail">
//                       <p className="cart-product-name">
//                         {cartItems.productName}
//                       </p>

//                       <div className="product-quick-details">
//                         <div className="quick-size-detail">
//                           <div className="size-option">SIZE:</div>
//                           <div className="size-value">
//                             {cartItems.size.toUpperCase()}
//                           </div>
//                         </div>

//                         <div className="quick-colour-detail">
//                           <div className="colour-option">COLOUR:</div>
//                           <div className="colour-value">
//                             {cartItems.colour.toUpperCase()}
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   </div>

//                   <div className="last-cart-detail">
//                     <div className="product-price-container">
//                       <p className="product-price">
//                         {formatMoney(cartItems.priceRupees)}
//                       </p>
//                     </div>

//                     <div className="quick-quantity-detail">
//                       <div className="quantity-option">QUANTITY:</div>
//                       <div className="quantity-value">
//                         <div className="edit-quantity">
//                           <div
//                             className="decrease-quick-quantity"
//                             onClick={() =>
//                               decreaseQuantity(
//                                 cartItems.productId,
//                                 cartItems.size,
//                                 cartItems.colour
//                               )
//                             }
//                           >
//                             -
//                           </div>
//                           {cartItems.quantity}
//                           <div
//                             className="increase-quick-quantity"
//                             onClick={() =>
//                               increaseQuantity(
//                                 cartItems.productId,
//                                 cartItems.size,
//                                 cartItems.colour
//                               )
//                             }
//                           >
//                             +
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>

//             {/* Payment summary */}
//             <div className="payment-container">
//               <h3>Summary</h3>
//               <div className="price-calculation">
//                 <div className="item-cost">
//                   <div>Total: (3 Items) </div>
//                   <div>Rs. 11,499</div>
//                 </div>

//                 <div className="calculate-discount">
//                   <div>
//                     Discount: (%)
//                     <p className="coupon-link js-coupon-link">apply coupon</p>
//                   </div>
//                   <div>Rs. N/A</div>
//                 </div>

//                 <div className="calculate-tax">
//                   <div>Tax: (12%)</div>
//                   <div>Rs. 1,380</div>
//                 </div>

//                 <div className="final-total-cost">
//                   <div>Total:</div>
//                   <div>Rs. 12,880</div>
//                 </div>

//                 <div className="checkout-button">
//                   <button>checkout</button>
//                 </div>
//               </div>
//             </div>
//           </div>
//         )}

//         <div className="confirmation-box js-confirmation-box"></div>
//       </div>
//     </>
//   );
// }
