import React from "react";
import { AiOutlineHome } from "react-icons/ai";
import { LiaUserFriendsSolid } from "react-icons/lia";
import { NavLink } from "react-router-dom";
import css from "./NavBar.module.css";

const NavBar = () => {
  const nav = [
    { to: "/", key: "Home", Icon: AiOutlineHome },
    { to: "/tweets", key: "Tweets", Icon: LiaUserFriendsSolid },
  ];

  return (
    <nav className={css.navigation}>
      <ul className={css.navigationList}>
        {nav.map(({ key, to, Icon }) => (
          <li key={key}>
            <NavLink to={to} className={css.link}>
              <Icon className={css.navigationIcon} />
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
