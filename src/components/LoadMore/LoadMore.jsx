import React from "react";
import css from "./LoadMore.module.css";

const LoadMore = ({ onClick }) => {
  return (
    <button onClick={onClick} className={css.buttonLoad}>
      Load More
    </button>
  );
};

export default LoadMore;
