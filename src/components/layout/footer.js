import React from "react";

function Footer() {
  return (
    <div className="footer">
      <a href="https://witter.com" target="_blank">
        <div className="twitter">
          <i className="fab fa-twitter"></i>
        </div>
      </a>
      <a href="https://facebook.com" target="_blank">
        <div className="facebook">
          <i className="fab fa-facebook-f"></i>
        </div>
      </a>
      <a href="https://instagram.com" target="_blank">
        <div className="instagram">
          <i className="fab fa-instagram"></i>
        </div>
      </a>
      <a href="" target="_blank">
        <div className="mail">
          <i className="fas fa-envelope"></i>
        </div>
      </a>
    </div>
  );
}
export default Footer;
