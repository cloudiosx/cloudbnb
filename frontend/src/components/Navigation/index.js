import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import ProfileButton from "./ProfileButton";
import LoginFormModal from "../LoginFormModal";
import "./Navigation.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Navigation({ isLoaded }) {
  const sessionUser = useSelector((state) => state.session.user);

  let sessionLinks;
  if (sessionUser) {
    sessionLinks = <ProfileButton user={sessionUser} />;
  } else {
    sessionLinks = (
      <>
        <LoginFormModal />
        <NavLink to="/signup">Sign Up</NavLink>
      </>
    );
  }

  return (
    <div className="header">
      <NavLink exact to="/">
        <img
          className="header__icon"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Airbnb_Logo_B%C3%A9lo.svg/2560px-Airbnb_Logo_B%C3%A9lo.svg.png"
          alt=""
        />
      </NavLink>
      <div className="header__center">
        <input type="text"></input>
        <FontAwesomeIcon icon={["far", "search"]} />
      </div>
      <div className="header__right">{isLoaded && sessionLinks}</div>
      <FontAwesomeIcon icon={["fal", "globe"]} />
      <FontAwesomeIcon icon={["far", "angle-down"]} />
      <FontAwesomeIcon icon={["fas", "user-circle"]} />
    </div>
  );
}

export default Navigation;
