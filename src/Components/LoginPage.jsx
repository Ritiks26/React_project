import { useState } from "react";
import googleIcon from "../../src/assets/google.svg";
import viewIcon from "../../src/assets/view.png";
import hideIcon from "../../src/assets/hide.png";
import "./LoginPage.css";

export function LoginPage() {
  const [activeTab, setActiveTab] = useState("login");
  const [showPassword, setShowPassword] = useState(false);
  const displayPasswordHandle = () => {
    setShowPassword(!showPassword);
  };

  return (
    <>
      <title>RSNB - Login</title>
      <div className="form-container">
        <div className="container">
          <div
            className={`child ${activeTab === "login" ? "active" : ""}`}
            onClick={() => {
              setActiveTab("login");
            }}
          >
            LOG IN
          </div>

          <div
            className={`child ${activeTab === "signup" ? "active" : ""}`}
            onClick={() => {
              setActiveTab("signup");
            }}
          >
            SIGN UP
          </div>

          <div
            className={`selector ${activeTab === "signup" ? "right" : "left"}`}
          ></div>
        </div>

        <form>
          {activeTab === "login" ? (
            <>
              <div className="greets">
                <p className="shop-name">RSNB</p>
                <p className="greet-text">Welcome back</p>
                <p className="login-text">please login to your account</p>
              </div>

              <div className="form-group">
                <input type="text" id="email" required />
                <div className="labelline">Email Address</div>
              </div>

              <div className="form-group">
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  required
                />

                <img
                  onClick={displayPasswordHandle}
                  className="hide-display-message"
                  src={showPassword ? hideIcon : viewIcon}
                  alt=""
                />

                <div className="labelline">Password</div>
                <p className="forgot-password-link">Forgot password?</p>
              </div>

              <div className="login-button">
                <button className="login-primary">LOGIN</button>
              </div>

              <div className="login-methods">
                <p className="login-method-text">OR</p>
                <div className="login-options">
                  <div className="connect-google">
                    <img src={googleIcon} alt="" />
                    Sign in with google
                  </div>
                </div>
              </div>
            </>
          ) : (
            <>
              <div className="greets">
                <p className="shop-name">RSNB</p>
                <p className="greet-text">Create Account</p>
                <p className="login-text">please fill your details</p>
              </div>

              <div className="form-group">
                <input type="text" id="name" required />
                <div className="labelline">Full Name</div>
              </div>

              <div className="form-group">
                <input type="text" id="email" required />
                <div className="labelline">Email Address</div>
              </div>

              <div className="form-group">
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  required
                />

                <img
                  onClick={displayPasswordHandle}
                  className="hide-display-message"
                  src={showPassword ? hideIcon : viewIcon}
                  alt=""
                />
                <div className="labelline">Create Password</div>
              </div>

              <div className="login-button">
                <button className="login-primary">SIGN UP</button>
              </div>
            </>
          )}
        </form>
      </div>
    </>
  );
}
