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
      <div className="header__left">
        <NavLink id="logo-title-container" exact to="/">
          {/* <img
            className="logo"
            src="https://res.cloudinary.com/dbtsjperv/image/upload/v1636358178/cloudbnb-logos_transparent_rd1vck.png"
            alt=""
          /> */}
          <span id="logo-title">cloudbnb</span>
        </NavLink>
      </div>
      <div className="header__center">
        <input type="text"></input>
        <FontAwesomeIcon icon={["far", "search"]} />
      </div>
      <div className="header__right">
        {isLoaded && sessionLinks}
        <FontAwesomeIcon icon={["fal", "globe"]} />
        <FontAwesomeIcon icon={["far", "angle-down"]} />
        <FontAwesomeIcon icon={["fas", "user-circle"]} />
      </div>
    </div>
  );
}

export default Navigation;
