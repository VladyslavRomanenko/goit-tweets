import React from "react";
import { getUsers } from "../../service/api";
import icon from "../../images/icons.svg";
import boy from "../../images/boy.png";
import tweets from "../../images/tweets.png";
import rectangle from "../../images/rectangle.png";
import css from "./Card.module.css";

const Card = () => {
  const data = getUsers();
  console.log(data);
  return (
    <li className={css.card}>
      <svg className={css.logoIcon}>
        <use href={icon + "#logoIcon"}></use>
      </svg>
      <img src={tweets} alt="tweet-image" className={css.tweetsImage} />
      <img src={rectangle} className={css.rectangle} alt="rectangle" />
      <img src={boy} alt="" className={css.boyImage} />
      <p className={css.tweets}>777 Tweets</p>
      <p className={css.followers}>100,500 followers</p>
      <button className={css.btnFollow} type="button">
        Follow
      </button>
    </li>
  );
};

export default Card;
