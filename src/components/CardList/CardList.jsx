import React from "react";
import Card from "../Card/Card";
import css from "./CardList.module.css";
import LoadMore from "../LoadMore/LoadMore";
import { useSelector } from "react-redux";
import { selectUsers } from "../../redux/users/selectors";

const CardList = () => {
  const users = useSelector(selectUsers);
  return (
    <>
      <ul className={css.cardsList}>
        {users.map((user) => {
          return <Card key={user.id} {...user} />;
        })}
      </ul>
      <LoadMore />
    </>
  );
};

export default CardList;
