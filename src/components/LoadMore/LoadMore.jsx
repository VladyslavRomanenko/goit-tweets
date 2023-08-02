import React from "react";
import css from "./LoadMore.module.css";
import PropTypes from "prop-types";

const LoadMore = ({ onClick }) => {
  return (
    <button onClick={onClick} className={css.buttonLoad}>
      Load More
    </button>
  );
};

LoadMore.propTypes = {
  onClick: PropTypes.func,
};

export default LoadMore;
