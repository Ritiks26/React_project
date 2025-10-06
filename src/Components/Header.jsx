import { Link } from "react-router";
import { useEffect, useRef, useState } from "react";
import accountIcon from "../../src/assets/account.svg";
import shoppingBag from "../../src/assets/shopping-bag.svg";
import menuBar from "../../src/assets/hamburger-menu.svg";
import logo from "../../src/assets/nike-logo.svg";
import removeIcon from "../../src/assets/remove-icon.svg";
import "./Header.css";
import gsap from "gsap";

export function Header({
  totalQuantity,
  products,
  productsMore,
  productsMoreLast,
}) {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [search, setSearch] = useState("");
  const mobileMenuRef = useRef();
  const dropMenuRef = useRef();
  const t1 = useRef();

  useEffect(() => {
    t1.current = gsap.timeline({ paused: true });

    t1.current.to(mobileMenuRef.current, {
      x: 0,
      duration: 0.5,
    });

    t1.current.fromTo(
      mobileMenuRef.current.querySelectorAll(".menu-nav-link"),
      { x: 50, opacity: 0 },
      { x: 0, opacity: 1, stagger: 0.1, duration: 0.4 }
    );
  }, []);

  useEffect(() => {
    if (mobileMenu) {
      t1.current.play();
    } else {
      t1.current.reverse();
    }
  }, [mobileMenu]);

  const allProducts = [...products, ...productsMore, ...productsMoreLast];

  const filteredProducts = allProducts.filter((product) =>
    product.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <header>
        <div className="header">
          <div className="left-section">
            <Link to={"/"}>
              <img src={logo} alt="" />
            </Link>
          </div>

          <nav className="js-nav">
            <ul>
              <li className="list">
                <a href="#" className="all-lists">
                  Home
                </a>
              </li>

              <li>
                <a href="#" className="all-lists">
                  Brands
                </a>
                <ul className="dropdown" ref={dropMenuRef}>
                  <li>
                    <a href="#"></a>H&M
                  </li>
                  <li>
                    <a href="#"></a>Peter England
                  </li>
                  <li>
                    <a href="#"></a>Levi's
                  </li>
                  <li>
                    <a href="#"></a>Vans
                  </li>
                  <li>
                    <a href="#"></a>Nike
                  </li>
                  <li>
                    <a href="#"></a>Adidas
                  </li>
                  <li>
                    <a href="#"></a>Tommy Hilfiger
                  </li>
                  <li>
                    <a href="#"></a>Puma
                  </li>
                  <li>
                    <a href="#"></a>ZARA
                  </li>
                  <li>
                    <a href="#"></a>GAP
                  </li>
                  <li>
                    <a href="#"></a>Nike
                  </li>
                  <li>
                    <a href="#"></a>Adidas
                  </li>
                  <li>
                    <a href="#"></a>Tommy Hilfiger
                  </li>
                  <li>
                    <a href="#"></a>Puma
                  </li>
                  <li>
                    <a href="#"></a>ZARA
                  </li>
                  <li>
                    <a href="#"></a>GAP
                  </li>
                  <li>
                    <a href="#"></a>Puma
                  </li>
                  <li>
                    <a href="#"></a>ZARA
                  </li>
                  <li>
                    <a href="#"></a>GAP
                  </li>
                  <li>
                    <a href="#"></a>Nike
                  </li>
                  <li>
                    <a href="#"></a>Adidas
                  </li>
                  <li>
                    <a href="#"></a>Tommy Hilfiger
                  </li>
                  <li>
                    <a href="#"></a>Puma
                  </li>
                  <li>
                    <a href="#"></a>ZARA
                  </li>
                  <li>
                    <a href="#"></a>GAP
                  </li>
                  <li>
                    <a href="#"></a>Adidas
                  </li>
                  <li>
                    <a href="#"></a>Tommy Hilfiger
                  </li>
                  <li>
                    <a href="#"></a>Puma
                  </li>
                </ul>
              </li>

              <li>
                <a href="#" className="all-lists">
                  Offers
                </a>
              </li>

              <li>
                <a href="#" className="all-lists">
                  Specials
                </a>
              </li>

              <li>
                <a href="#" className="all-lists">
                  More
                </a>
              </li>

              <li>
                <a href="#" className="all-lists">
                  About
                </a>
              </li>
            </ul>
          </nav>

          <div className="right-section-header">
            <div className="input-container">
              <img
                className="search-icon"
                src="https://www.svgrepo.com/show/7109/search.svg"
              />
              <input
                className="search-bar"
                type="text"
                placeholder="SEARCH!"
                value={search}
                onChange={(e) => {
                  setSearch(e.target.value);
                }}
              />
            </div>

            <div className="user-options">
              <div className="login-account">
                <Link to="/login">
                  <img className="login-svg" src={accountIcon} alt="" />
                </Link>
              </div>
              <div className="carts">
                <Link to="/checkout">
                  <img className="cart-svg" src={shoppingBag} alt="" />
                  <div className="cart-counts">{totalQuantity}</div>
                </Link>
              </div>

              <div
                className="hamburger-menu"
                onClick={() => {
                  setMobileMenu(true);
                }}
              >
                <img src={menuBar} alt="" />
              </div>

              <div ref={mobileMenuRef} className="mobile-menu-slide">
                <div
                  className="remove-icon"
                  onClick={() => {
                    setMobileMenu(false);
                  }}
                >
                  <img src={removeIcon} alt="" />
                </div>

                <ul>
                  <Link className="menu-nav-link" to={"/"}>
                    HOME
                  </Link>
                  <Link className="menu-nav-link" to={"#"}>
                    BRANDS
                  </Link>
                  <Link className="menu-nav-link" to={"#"}>
                    OFFERS
                  </Link>
                  <Link className="menu-nav-link" to={"#"}>
                    SPECIALS
                  </Link>
                  <Link className="menu-nav-link" to={"#"}>
                    MORE
                  </Link>
                  <Link className="menu-nav-link" to={"#"}>
                    ABOUT
                  </Link>
                </ul>
              </div>
            </div>
          </div>

          {search !== "" && (
            <div className="filteredProducts-container">
              {filteredProducts.length > 0 ? (
                filteredProducts.map((product) => (
                  <Link
                    key={product.id}
                    className="Link"
                    to={`product/${product.id}`}
                  >
                    <div className="filteredProduct-card">
                      <div className="filteredProduct-image">
                        <img src={product.colors[0].image[0]} alt="" />
                      </div>
                      <div className="filteredProduct-details">
                        <h3>{product.name}</h3>
                        <p>₹{product.priceRupees}</p>
                      </div>
                    </div>
                  </Link>
                ))
              ) : (
                <div className="nothing-found-message">
                  <p>No product found!</p>
                </div>
              )}
            </div>
          )}
        </div>

        <div className="android-search-bar">
          <input
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
            }}
            type="text"
            placeholder="SEARCH!"
          />
          <img
            className="android-search-icon"
            src="https://www.svgrepo.com/show/7109/search.svg"
            alt=""
          />
        </div>
      </header>
    </>
  );
}
