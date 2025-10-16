import "./Footer.css";

export function Footer() {
  return (
    <div className="footer-container">
      <div className="footer-child">
        <h1>RSNB</h1>
        <p>
          RSNB is a factory brand born from a tradition of excellence — where
          meticulous craftsmanship meets contemporary design to create luxury
          apparel built to last.
        </p>
      </div>
      <div className="footer-child-lists">
        <ul>
          <li className="lists-heading">Social</li>
          <li>Instagram</li>
        </ul>

        <ul>
          <li className="lists-heading">Information</li>
          <li>Size Guide</li>
          <li>FAQ</li>
          <li>Wholesale</li>
          <li>Contact</li>
          <li>Shipping & returns</li>
        </ul>

        <ul>
          <li>Terms of service</li>
          <li>Privacy Policy</li>
        </ul>
        <p className="copywrite-message">&copy; RSNB . All Rights Reserved.</p>
      </div>
    </div>
  );
}
