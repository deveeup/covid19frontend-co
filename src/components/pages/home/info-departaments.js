import React from "react";
import downArrow from "../../../assets/img/icons/iconDown.svg";

const InfoDepartaments = ({ departaments }) => {
  return (
    <div className="Home-departaments">
      <div className="Home-departaments-item">
        <div className="Home-departaments-item-header">
          <img src={downArrow} alt="" />
          <p>Nombre del departamento</p>
        </div>
      </div>
      <div className="Home-departaments-item">
        <div className="Home-departaments-item-header">
          <img src={downArrow} alt="" />
          <p>Nombre del departamento</p>
        </div>
      </div>
      <div className="Home-departaments-item">
        <div className="Home-departaments-item-header">
          <img src={downArrow} alt="" />
          <p>Nombre del departamento</p>
        </div>
      </div>
    </div>
  );
};

export default InfoDepartaments;
