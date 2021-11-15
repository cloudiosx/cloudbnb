import React, { useState } from "react";
import { Modal } from "../../context/Modal";
import LoginForm from "./LoginForm";
import SignupFormPage from "../SignupFormPage";
import "./LoginFormModal.css";

function LoginFormModal() {
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showSignupModal, setShowSignupModal] = useState(false);

  return (
    <>
      <button className="button" onClick={() => setShowLoginModal(true)}>
        Log In
      </button>
      {showLoginModal && (
        <Modal onClose={() => setShowLoginModal(false)}>
          <LoginForm />
        </Modal>
      )}
      <button className="button" onClick={() => setShowSignupModal(true)}>
        Sign Up
      </button>
      {showSignupModal && (
        <Modal onClose={() => setShowSignupModal(false)}>
          <SignupFormPage />
        </Modal>
      )}
    </>
  );
}

export default LoginFormModal;
