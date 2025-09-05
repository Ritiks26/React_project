import googleIcon from "../assets/google.svg";
import fbIcon from "../assets/fb.svg";
import "./LoginPage.css";

export function LoginPage() {
  return (
    <>
      <title>Login</title>
      <div className="form-outer-parent">
        <div class="form-container">
          {/* <div class="form-image">
            <img
              src="https://genevievesweeney.com/cdn/shop/files/Genevieve-Sweeney-Oversized-Lambswool-Geometric-Scarf-Pink.jpg?v=1751032896&width=540"
              alt=""
            />
          </div> */}

          <div class="form-content">
            <div class="greeting">
              <h5>RSNB</h5>
              <h2>Welcome Back</h2>
              <p>Please login to your account</p>
            </div>

            <form action="#">
              <div class="form-inputs">
                <input type="text" placeholder="Email address" required />
                <input type="password" placeholder="Password" required />
                <p class="forgot-link">Forgot password?</p>
              </div>
            </form>
            <button class="login-button">LOGIN</button>
            <p class="other-login-text">Or Login with</p>

            <div class="other-login-options">
              <div class="social-media">
                <div className="social-media-image">
                  <img class="icon-pic" src={googleIcon} alt="" />
                </div>
                <p>Google</p>
              </div>

              <div class="social-media">
                <div className="social-media-image">
                  <img class="icon-pic" src={fbIcon} alt="" />
                </div>
                <p>Facebook</p>
              </div>
            </div>

            <p class="new-user">
              Don't have an account? <span>Signup</span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
