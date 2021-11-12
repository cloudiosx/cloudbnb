import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import ProfileButton from "./ProfileButton";
import LoginFormModal from "../LoginFormModal";
import "./Navigation.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Navigation({ isLoaded }) {
  const sessionUser = useSelector((state) => state.session.user);
  const [navBar, setNavBar] = useState(false);

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

  const changeBackground = () => {
    if (window.scrollY >= 80) {
      setNavBar(true);
    } else {
      setNavBar(false);
    }
  };

  window.addEventListener("scroll", changeBackground);

  return (
    <div className={navBar ? "header active" : "header"}>
      <div className="header__left">
        <NavLink
          className={
            navBar ? "logo-title-container-active" : "logo-title-container"
          }
          exact
          to="/"
        >
          {/* <img
            className="logo"
            src="https://res.cloudinary.com/dbtsjperv/image/upload/v1636358178/cloudbnb-logos_transparent_rd1vck.png"
            alt=""
          /> */}
          <FontAwesomeIcon icon={["fal", "house"]} />
          <span id="logo-title">cloudbnb</span>
        </NavLink>
      </div>
      {/* <div className="header__center">
        <input type="text"></input>
        <FontAwesomeIcon icon={["far", "search"]} />
      </div> */}
      <div className={navBar ? "header-right-active" : "header-right"}>
        {isLoaded && sessionLinks}
        <FontAwesomeIcon icon={["fal", "globe"]} />
        <FontAwesomeIcon icon={["far", "angle-down"]} />
        <FontAwesomeIcon icon={["fas", "user-circle"]} />
      </div>
    </div>
  );
}

export default Navigation;
