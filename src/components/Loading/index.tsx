import React from "react";
import mask from "./../../assets/mask.png";
import "./styles.css";

const Loading = () => {
  return (
    <>
      <div className="loading">
        <div className="loading-container">
          <div className="ball">
            <img alt="loading" src={mask} />
          </div>
          <div className="ball">
            <img alt="loading" src={mask} />
          </div>
          <div className="ball">
            <img alt="loading" src={mask} />
          </div>
          <span className="text-loading">Carregando...</span>
        </div>
      </div>
    </>
  );
};

export default Loading;
