import React from "react";
import "./header.styles.scss";
import NavbarMain from "../navbar/navbar-main.component";
import { Link } from "react-router-dom";
function Header() {
  return (
    <div className="header">
      <div className="title-container ">
        <h1 className="text-center">מאה ועשר שנים לעליית תימני כנרת</h1>
      </div>

      <div className="img-container">
        <div className="container">
          <Link to="/tk-react">
            <img src={require("./kin_logo2.jpg")} alt="header_img" />
          </Link>
        </div>
      </div>

      <div className="navbar-container">
        <NavbarMain />
      </div>
    </div>
  );
}

export default Header;
