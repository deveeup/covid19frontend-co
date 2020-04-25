import React from "react";
import logoCol from "../../../assets/img/colombia_img.png";

const InfoCol = ({ total }) => {
  return (
    <div className="Home-card">
      <img src={logoCol} alt="" />
      <div className="Home-card-info">
        <h3>
          <span>{total}</span>
          Total de casos en el país
        </h3>
      </div>
    </div>
  );
};

export default InfoCol;
