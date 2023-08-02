import React from "react";
import icon from "../../images/icons.svg";
import boy from "../../images/boy.png";
import tweetsPicture from "../../images/tweets.png";
import rectangle from "../../images/rectangle.png";
import ellipse from "../../images/ellipse.png";
import css from "./Card.module.css";
import { useDispatch } from "react-redux";
import { updateUserThunk } from "../../redux/users/operations";
import PropTypes from "prop-types";

function formatNumber(number) {
  let numberString = String(number);
  let firstPart = numberString.slice(0, 2);
  let secondPart = numberString.slice(2);
  const format = `${firstPart},${secondPart}`;
  return format;
}

const Card = ({ avatar, user, followers, id, isFollow, tweets }) => {
  const dispatch = useDispatch();
  const handleFollow = () => {
    dispatch(
      updateUserThunk({
        id,
        isFollow: !isFollow,
        followers: isFollow ? followers - 1 : followers + 1,
      })
    );
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
        className={isFollow ? `${css.btnFollowing}` : `${css.btnFollow}`}
        type="button"
        onClick={handleFollow}
      >
        {isFollow ? "Following" : "Follow"}
      </button>
    </li>
  );
};

Card.propTypes = {
  avatar: PropTypes.string.isRequired,
  user: PropTypes.string.isRequired,
  followers: PropTypes.number,
  id: PropTypes.string,
  isFollow: PropTypes.bool,
  tweets: PropTypes.number,
};

export default Card;
