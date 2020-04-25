import React from "react";
import logoCol from "../../../assets/img/colombia_img.png";
import male from "../../../assets/img/icons/icon_male.svg";
import female from "../../../assets/img/icons/icon_female.svg";
import recovered from "../../../assets/img/icons/icon_heart.svg";
import inHouse from "../../../assets/img/icons/icon_home.svg";
import inHospital from "../../../assets/img/icons/icon_hospital.svg";
import dead from "../../../assets/img/icons/icon_dead.svg";
import boy from "../../../assets/img/icons/icon_boy.svg";
import man from "../../../assets/img/icons/icon_man.svg";
import granFather from "../../../assets/img/icons/icon_granfather.svg";
import downArrow from "../../../assets/img/icons/iconDown.svg";
import "./index.scss";
const Home = () => {
  return (
    <div className="Home">
      <h2>Colombia</h2>
      <div className="Home-card">
        <img src={logoCol} alt="" />
        <div className="Home-card-info">
          <h3>
            <span>4365</span>
            Total de casos en el país
          </h3>
        </div>
      </div>
      <div className="Home-card">
        <h4>Genero</h4>
        <div className="Home-card-item">
          <img src={male} alt="" />
          <p>
            <span>1456</span>
            Hombres
          </p>
        </div>
        <div className="Home-card-item">
          <img src={female} alt="" />
          <p>
            <span>1456</span>
            Mujeres
          </p>
        </div>
        <div className="separator" />
        <h4>Estado</h4>
        <div className="Home-card-item">
          <img src={recovered} alt="" />
          <p>
            <span>1456</span>
            Recuperados
          </p>
        </div>
        <div className="Home-card-item">
          <img src={inHouse} alt="" />
          <p>
            <span>1456</span>
            En casa
          </p>
        </div>
        <div className="Home-card-item">
          <img src={inHospital} alt="" />
          <p>
            <span>1456</span>
            En hospital
          </p>
        </div>
        <div className="Home-card-item">
          <img src={dead} alt="" />
          <p>
            <span>1456</span>
            Muertos
          </p>
        </div>
        <div className="separator" />
        <h4>Edad</h4>
        <div className="Home-card-item">
          <img src={boy} alt="" />
          <p>
            <span>1456</span>
            Hasa 20 años
          </p>
        </div>
        <div className="Home-card-item">
          <img src={man} alt="" />
          <p>
            <span>1456</span>
            Entre 20 y 40 años
          </p>
        </div>
        <div className="Home-card-item">
          <img src={man} alt="" />
          <p>
            <span>1456</span>
            Entre 40 y 60 años
          </p>
        </div>
        <div className="Home-card-item">
          <img src={granFather} alt="" />
          <p>
            <span>1456</span>
            Mayores de 60 años
          </p>
        </div>
      </div>
      <h2>Información de casos por departamento</h2>
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
    </div>
  );
};

export default Home;
