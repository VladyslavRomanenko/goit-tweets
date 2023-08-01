import React, { useState } from "react";
import icon from "../../images/icons.svg";
import boy from "../../images/boy.png";
import tweetsPicture from "../../images/tweets.png";
import rectangle from "../../images/rectangle.png";
import ellipse from "../../images/ellipse.png";
import css from "./Card.module.css";
import { useDispatch } from "react-redux";
import { updateUserThunk } from "../../redux/users/operations";

function formatNumber(number) {
  const string = String(number).replace(/^0+/, "");
  if (string.length > 6) {
    const truncatedString = string.slice(0, 6);
    const integerPart = truncatedString.slice(0, -3);
    const decimalPart = truncatedString.slice(-3);
    return `${integerPart},${decimalPart}`;
  }
  return string;
}
console.log(formatNumber(1005002343));

const Card = ({ avatar, user, followers, id, isFollow, tweets }) => {
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const handleFollow = () => {
    dispatch(
      updateUserThunk({
        id,
        isFollow: !isFollow,
        followers: !isFollow ? followers - 1 : followers + 1,
      })
    );
    setLoading(true);
  };

  return (
    <li className={css.card}>
      <svg className={css.logoIcon}>
        <use href={icon + "#logoIcon"}></use>
      </svg>
      <img src={tweetsPicture} alt="tweet" className={css.tweetsImage} />

      <img src={ellipse} alt="ellipse" className={css.ellipse} />
      <img src={rectangle} className={css.rectangle} alt="rectangle" />
      <img src={avatar ? avatar : boy} alt="avatar" className={css.boyImage} />
      <p className={css.userName}>{user}</p>
      <p className={css.tweets}>{tweets} Tweets</p>
      <p className={css.followers}>{formatNumber(followers)} followers</p>
      <button
        className={css.btnFollow}
        type="button"
        disabled={loading}
        status={isFollow}
        onClick={handleFollow}
      >
        Follow
      </button>
    </li>
  );
};

export default Card;
