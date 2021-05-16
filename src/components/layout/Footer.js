import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

function Footer() {
  const { islogged } = useContext(AuthContext);
  return (
    <div
      className="footer"
      style={
        islogged ? { backgroundColor: "#00367A" } : { backgroundColor: "white" }
      }
    >
      <a href="https://witter.com" target="_blank" rel="noreferrer">
        <div className="twitter">
          <i className="fab fa-twitter"></i>
        </div>
      </a>
      <a href="https://facebook.com" target="_blank" rel="noreferrer">
        <div className="facebook">
          <i className="fab fa-facebook-f"></i>
        </div>
      </a>
      <a href="https://instagram.com" target="_blank" rel="noreferrer">
        <div className="instagram">
          <i className="fab fa-instagram"></i>
        </div>
      </a>
      <a>
        <div className="mail">
          <i className="fas fa-envelope"></i>
        </div>
      </a>
    </div>
  );
}
export default Footer;
