import React from "react";
import { AiOutlineHome } from "react-icons/ai";
import { LiaUserFriendsSolid } from "react-icons/lia";
import css from "./NavBar.module.css";
import { NavLink } from "react-router-dom";
import { theme } from "../../assets/themes/theme";

const NavBar = () => {
  const navigation = [
    { to: "/", key: "Home", Icon: AiOutlineHome },
    { to: "/tweets", key: "Tweets", Icon: LiaUserFriendsSolid },
  ];

  return (
    <nav className={css.navigation}>
      <ul className={css.navigationList}>
        {navigation.map(({ key, to, Icon }) => (
          <li key={key}>
            <NavLink to={to} className={css.link}>
              {({ isActive }) => (
                <Icon
                  className={css.navigationIcon}
                  style={{
                    width: "50px",
                    height: "50px",
                    fill: isActive
                      ? `${theme.colors.accent}`
                      : `${theme.colors.primary}`,
                  }}
                />
              )}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
