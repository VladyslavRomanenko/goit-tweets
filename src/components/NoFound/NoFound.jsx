import React from "react";
import noFound from "../../images/no-found.png";
import css from "./NoFound.module.css";

const NoFound = () => {
  return (
    <div className={css.noFound}>
      <img src={noFound} alt="no found" />
    </div>
  );
};

export default NoFound;
