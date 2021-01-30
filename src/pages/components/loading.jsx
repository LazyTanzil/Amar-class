import React from "react";
import { ScaleLoader } from "react-spinners";

const loading = () => {
  const divCss = {
    position: "fixed",
    height: "100%",
    width: "100vw",
    zIndex: "999",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    top: "50%",
    left: "50%",
    transform: `translate(-50%, -50%)`,
    background: "rgba(0,0,0,0.7)",
  };
  return (
    <>
      <div style={divCss}>
        <ScaleLoader
          height="70px"
          width="6px"
          radius="0px"
          margin="5px"
          color="#e84118"
        />
      </div>
    </>
  );
};

export default loading;
