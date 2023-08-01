import React from "react";
import Card from "../Card/Card";
import css from "./CardList.module.css";
import LoadMore from "../LoadMore/LoadMore";

const CardList = () => {
  return (
    <>
      <ul className={css.cardsList}>
        <Card />
        <Card />
        <Card />
        {/* <Card />
      <Card />
      <Card /> */}
      </ul>
      <LoadMore />
    </>
  );
};

export default CardList;
