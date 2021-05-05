import React from "react";

function Footer() {
  return (
    <div className="footer">
      <a href="https://witter.com" target="_blank">
        <div className="twitter">
          <i class="fab fa-twitter"></i>
        </div>
      </a>
      <a href="https://facebook.com" target="_blank">
        <div className="facebook">
          <i class="fab fa-facebook-f"></i>
        </div>
      </a>
      <a href="https://instagram.com" target="_blank">
        <div className="instagram">
          <i class="fab fa-instagram"></i>
        </div>
      </a>
      <a href="" target="_blank">
        <div className="mail">
          <i class="fas fa-envelope"></i>
        </div>
      </a>
    </div>
  );
}
export default Footer;
