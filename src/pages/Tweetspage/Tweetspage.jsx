import React from "react";
import CardList from "../../components/CardList/CardList";
import { MdArrowBack } from "react-icons/md";
import css from "./Tweets.module.css";
import { useNavigate } from "react-router-dom";

const Tweetspage = () => {
  const navigate = useNavigate();
  const handleGoBack = () => {
    navigate("/");
  };
  return (
    <>
      <button className={css.btn} onClick={handleGoBack}>
        <MdArrowBack className={css.iconBtn} />
      </button>
      <div className={css.cards}>
        <CardList />
      </div>
    </>
  );
};

export default Tweetspage;
