import React from "react";
import logo from "../../../assets/img/covid19col.svg";
import "./styles.scss";
const Header = () => {
  return (
    <header>
      <img src={logo} alt="" />
      <p>
        <span>COVID19</span>col
      </p>
    </header>
  );
};

export default Header;
