import React from "react";
import home from "../../../assets/img/icons/home.svg";
import map from "../../../assets/img/icons/map.svg";
import elbow from "../../../assets/img/icons/elbow.svg";
import sick from "../../../assets/img/icons/sick.svg";
import info from "../../../assets/img/icons/info.svg";

import "./styles.styl";
const Footer = () => {
  return (
    <footer>
      <a href="#">
        <img src={home} alt="" />
      </a>
      <a href="#">
        <img src={map} alt="" />
      </a>
      <a href="#">
        <img src={elbow} alt="" />
      </a>
      <a href="#">
        <img src={sick} alt="" />
      </a>
      <a href="#">
        <img src={info} alt="" />
      </a>
    </footer>
  );
};

export default Footer;
