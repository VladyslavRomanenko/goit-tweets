import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectLoading } from "../../redux/users/selectors";
import { nextPage } from "../../redux/users/slice";
import css from "./LoadMore.module.css";

const LoadMore = () => {
  const loading = useSelector(selectLoading);
  const dispatch = useDispatch();
  const handleLoadMore = () => {
    dispatch(nextPage());
  };
  return (
    <button onClick={handleLoadMore} className={css.buttonLoad}>
      {loading ? "Loading" : "Load More"}
    </button>
  );
};

export default LoadMore;
