import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import * as sessionActions from "../../store/session";
import "./SignupForm.css";

function SignupFormPage() {
  const dispatch = useDispatch();
  const sessionUser = useSelector((state) => state.session.user);
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState([]);

  if (sessionUser) return <Redirect to="/" />;

  const validateForm = () => {
    const validationErrors = [];

    if (!email) {
      validationErrors.push("Please provide a email");
    }

    if (!username) {
      validationErrors.push("Please provide an username");
    }

    if (!password) {
      validationErrors.push("Please provide a valid password");
    }

    if (!confirmPassword) {
      validationErrors.push("Please confirm your password");
    }

    setErrors(validationErrors);

    return validationErrors.length;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm() > 0) return;

    if (password === confirmPassword) {
      setErrors([]);
      return dispatch(
        sessionActions.signup({ email, username, password })
      ).catch(async (res) => {
        const data = await res.json();
        if (data && data.errors) setErrors(data.errors);
      });
    }
    return setErrors([
      "Confirm Password field must be the same as the Password field",
    ]);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div class="field-group">
        <label> Email</label>
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          // required
        />
      </div>
      <div class="field-group">
        <label> Username</label>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          // required
        />
      </div>

      <div class="field-group">
        <label>Password</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          // required
        />
      </div>

      <div class="field-group">
        <label>Confirm Password</label>
        <input
          type="password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          // required
        />
      </div>
      <div class="single-button">
        <button type="submit">Sign Up</button>
      </div>
      <ul>
        {errors.map((error, idx) => (
          <li key={idx}>{error}</li>
        ))}
      </ul>
    </form>
  );
}

export default SignupFormPage;
