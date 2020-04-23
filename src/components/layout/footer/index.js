import React from "react";
import { Link } from "react-router-dom";
import home from "../../../assets/img/icons/home.svg";
import map from "../../../assets/img/icons/map.svg";
import elbow from "../../../assets/img/icons/elbow.svg";
import sick from "../../../assets/img/icons/sick.svg";
import info from "../../../assets/img/icons/info.svg";

import "./styles.styl";
const Footer = () => {
  return (
    <footer>
      <Link to="/">
        <img src={home} alt="" />
      </Link>
      <Link to="/mapa">
        <img src={map} alt="" />
      </Link>
      <Link to="">
        <img src={elbow} alt="" />
      </Link>
      <Link to="">
        <img src={sick} alt="" />
      </Link>
      <Link to="">
        <img src={info} alt="" />
      </Link>
    </footer>
  );
};

export default Footer;
