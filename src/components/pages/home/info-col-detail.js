import React from "react";
import male from "../../../assets/img/icons/icon_male.svg";
import female from "../../../assets/img/icons/icon_female.svg";
import recovered from "../../../assets/img/icons/icon_heart.svg";
import inHouse from "../../../assets/img/icons/icon_home.svg";
import inHospital from "../../../assets/img/icons/icon_hospital.svg";
import dead from "../../../assets/img/icons/icon_dead.svg";
import boy from "../../../assets/img/icons/icon_boy.svg";
import man from "../../../assets/img/icons/icon_man.svg";
import granFather from "../../../assets/img/icons/icon_granfather.svg";
const InfoColDetail = ({ details }) => {
  return (
    <div className="Home-card">
      <h4>Genero</h4>
      <div className="Home-card-item">
        <img src={male} alt="" />
        <p>
          <span>{details.sexM}</span>
          Hombres
        </p>
      </div>
      <div className="Home-card-item">
        <img src={female} alt="" />
        <p>
          <span>{details.sexF}</span>
          Mujeres
        </p>
      </div>
      <div className="separator" />
      <h4>Estado</h4>
      <div className="Home-card-item">
        <img src={recovered} alt="" />
        <p>
          <span>{details.recovered}</span>
          Recuperados
        </p>
      </div>
      <div className="Home-card-item">
        <img src={inHouse} alt="" />
        <p>
          <span>{details.inHouse}</span>
          En casa
        </p>
      </div>
      <div className="Home-card-item">
        <img src={inHospital} alt="" />
        <p>
          <span>{details.inHospital}</span>
          En hospital
        </p>
      </div>
      <div className="Home-card-item">
        <img src={dead} alt="" />
        <p>
          <span>{details.dead}</span>
          Muertos
        </p>
      </div>
      <div className="separator" />
      <h4>Edad</h4>
      <div className="Home-card-item">
        <img src={boy} alt="" />
        <p>
          <span>{details.ageRange.smallerThan20}</span>
          Hasa 20 años
        </p>
      </div>
      <div className="Home-card-item">
        <img src={man} alt="" />
        <p>
          <span>{details.ageRange.between20And40}</span>
          Entre 20 y 40 años
        </p>
      </div>
      <div className="Home-card-item">
        <img src={man} alt="" />
        <p>
          <span>{details.ageRange.between40And60}</span>
          Entre 40 y 60 años
        </p>
      </div>
      <div className="Home-card-item">
        <img src={granFather} alt="" />
        <p>
          <span>{details.ageRange.greaterThan60}</span>
          Mayores de 60 años
        </p>
      </div>
    </div>
  );
};

export default InfoColDetail;
