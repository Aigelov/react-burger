import React from "react";
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

export const Spinner = () => {
  return (
    <div style={{ marginTop: "5%", textAlign: "center" }}>
      <Loader type="Oval" color="#00BFFF" height={100} width={100} />
    </div>
  );
};
