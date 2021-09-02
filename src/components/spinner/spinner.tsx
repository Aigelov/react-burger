import React, { FC } from "react";
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

interface ISpinner {
  height?: number;
  width?: number;
}

export const Spinner: FC<ISpinner> = ({ height = 100, width = 100 }) => {
  return (
    <div style={{ margin: "5% auto 0", textAlign: "center" }}>
      <Loader type="Oval" color="#00BFFF" height={height} width={width} />
    </div>
  );
};
