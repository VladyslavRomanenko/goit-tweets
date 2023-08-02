import React, { useEffect, useState } from "react";
import Card from "../Card/Card";
import css from "./CardList.module.css";
import LoadMore from "../LoadMore/LoadMore";
import { useDispatch, useSelector } from "react-redux";
import {
  selectFilter,
  selectLoading,
  selectUsers,
} from "../../redux/users/selectors";
import { getUsersThunk } from "../../redux/users/operations";
import { Loader } from "../Loader/Loader";

const CardList = () => {
  let users = useSelector(selectUsers);
  const filter = useSelector(selectFilter);
  const [count, setCount] = useState(3);
  const loading = useSelector(selectLoading);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUsersThunk(count));
  }, [dispatch, count]);

  const handleLoadMore = () => {
    setCount(count + 3);
  };

  if (filter === "follow") {
    users = users.filter((user) => !user.isFollow);
  } else if (filter === "following") {
    users = users.filter((user) => user.isFollow);
  }

  const showLoadMoreBtn = users.length >= count;
  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <ul className={css.cardsList}>
          {users.map((user) => {
            return <Card key={user.id} {...user} />;
          })}
        </ul>
      )}

      {showLoadMoreBtn && <LoadMore onClick={handleLoadMore} />}
    </>
  );
};

export default CardList;
