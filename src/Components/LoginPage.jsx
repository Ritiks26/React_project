import googleIcon from "../assets/google.svg";
import fbIcon from "../assets/fb.svg";
import "./LoginPage.css";

export function LoginPage() {
  return (
    <form>
      <div className="greets">
        <p className="shop-name">RSNB</p>
        <p className="greet-text">Welcome back</p>
        <p className="login-text">please login to your account</p>
      </div>

      <div className="form-group">
        <input type="text" id="email" placeholder="Email address" required />
      </div>

      <div className="form-group">
        <input type="password" id="password" placeholder="Password" required />

        <p className="forgot-password-link">Forgot password?</p>
      </div>

      <div className="login-button">
        <button className="login-primary">LOGIN</button>
      </div>

      <div className="login-methods">
        <p className="login-method-text">Or Login with</p>
        <div className="login-options">
          <div className="connect-google">
            <img src={googleIcon} alt="" />
            Google
          </div>

          <div className="connect-facebook">
            <img src={fbIcon} alt="" />
            FaceBook
          </div>
        </div>
      </div>

      <div className="new-user">
        <p>
          Don't have an account? <span>sign up</span>
        </p>
      </div>
    </form>
  );
}
