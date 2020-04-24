import React from "react";
import logoCol from "../../../assets/img/colombia_img.png";
import male from "../../../assets/img/icons/male.svg";
import female from "../../../assets/img/icons/female.svg";
import recovered from "../../../assets/img/icons/recovered.svg";
import inHouse from "../../../assets/img/icons/house.svg";
import inHospital from "../../../assets/img/icons/hospital.svg";
import dead from "../../../assets/img/icons/rip.svg";
import boy from "../../../assets/img/icons/boy.svg";
import man from "../../../assets/img/icons/man.svg";
import man2 from "../../../assets/img/icons/man2.svg";
import granFather from "../../../assets/img/icons/granFather.svg";
import "./index.scss";
const Home = () => {
  return (
    <div className="Home">
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
            En tal lado
          </p>
        </div>
        <div className="Home-card-item">
          <img src={female} alt="" />
          <p>
            <span>1456</span>
            En tal lado
          </p>
        </div>
        <div className="separator" />
        <h4>Estado</h4>
        <div className="Home-card-item">
          <img src={recovered} alt="" />
          <p>
            <span>1456</span>
            En tal lado
          </p>
        </div>
        <div className="Home-card-item">
          <img src={inHouse} alt="" />
          <p>
            <span>1456</span>
            En tal lado
          </p>
        </div>
        <div className="Home-card-item">
          <img src={inHospital} alt="" />
          <p>
            <span>1456</span>
            En tal lado
          </p>
        </div>
        <div className="Home-card-item">
          <img src={dead} alt="" />
          <p>
            <span>1456</span>
            En tal lado
          </p>
        </div>
        <div className="separator" />
        <h4>Edad</h4>
        <div className="Home-card-item">
          <img src={boy} alt="" />
          <p>
            <span>1456</span>
            En tal lado
          </p>
        </div>
        <div className="Home-card-item">
          <img src={man} alt="" />
          <p>
            <span>1456</span>
            En tal lado
          </p>
        </div>
        <div className="Home-card-item">
          <img src={man2} alt="" />
          <p>
            <span>1456</span>
            En tal lado
          </p>
        </div>
        <div className="Home-card-item">
          <img src={granFather} alt="" />
          <p>
            <span>1456</span>
            En tal lado
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
