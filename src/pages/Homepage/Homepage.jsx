import React from "react";
import css from "./Homepage.module.css";
import img from "../../images/welcome.png";

const Homepage = () => {
  return (
    <div className={css.homeBox}>
      <h1 className={css.title}>Welcome to Tweets!</h1>
      <img src={img} alt="welcome" className={css.image} />
    </div>
  );
};

export default Homepage;
