/* eslint-disable react-hooks/exhaustive-deps */
import React, { useCallback, useState, useEffect } from "react";
import InfoCol from "./info-col";
import InfoColDetail from "./info-col-detail";
import InfoDepartaments from "./info-departaments";
import { addDataCol } from "../../../actions/colombia";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";

import "./index.scss";
const Home = () => {
  const PROXY_URL = process.env.REACT_APP_URL_CORS;
  const API = `${process.env.REACT_APP_URL_API_COL}/25-04-2020`;
  const { colombia } = useSelector((state) => state.colombia);
  const [status, setStatus] = useState({
    load: true,
    error: false,
  });
  const dispatch = useDispatch();
  const addData = useCallback(
    (data) => {
      dispatch(addDataCol(data));
    },
    [dispatch]
  );
  useEffect(() => {
    (async () => {
      await axios.get(PROXY_URL + API).then((response) => {
        const convertData = JSON.stringify(response.data.data.data);
        addData(JSON.parse(convertData));
        setStatus({
          load: false,
          error: false,
        });
      });
    })();
  }, []);

  if (status.load) {
    return <h1>cargando</h1>;
  } else {
    return (
      <div className="Home">
        <h2>Colombia</h2>
        <InfoCol total={colombia.total} />
        <InfoColDetail details={colombia} />
        <h2>Información de casos por departamento</h2>
        <InfoDepartaments />
      </div>
    );
  }
};

export default Home;
