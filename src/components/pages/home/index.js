import React, { useEffect } from "react";
import InfoCol from "./info-col";
import InfoColDetail from "./info-col-detail";
import InfoDepartaments from "./info-departaments";
import axios from "axios";
import "./index.scss";
const Home = () => {
  const proxyurl = "https://cors-anywhere.herokuapp.com/";
  const api = "https://covid19backend-co.herokuapp.com/api/colombia/25-04-2020";
  useEffect(() => {
    const getData = async () => {
      await axios.get(proxyurl + api).then((res) => console.log(res));
    };
    getData();
  }, []);
  return (
    <div className="Home">
      <h2>Colombia</h2>
      <InfoCol total="4850" />
      <InfoColDetail />
      <h2>Información de casos por departamento</h2>
      <InfoDepartaments />
    </div>
  );
};

export default Home;
