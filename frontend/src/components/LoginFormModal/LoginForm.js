import React, { useEffect, useState } from "react";
import * as sessionActions from "../../store/session";
import { useDispatch } from "react-redux";
import "./LoginForm.css";

function LoginForm() {
  const dispatch = useDispatch();
  const [credential, setCredential] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);

  const validateForm = () => {
    const validationErrors = [];

    if (!credential) {
      validationErrors.push("Please provide a username or email");
    }
    if (!password) {
      validationErrors.push("Please provide a valid password");
    }

    setErrors(validationErrors);

    return validationErrors.length;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm() > 0) return;

    setErrors([]);
    return dispatch(sessionActions.login({ credential, password })).catch(
      async (res) => {
        const data = await res.json();
        if (data && data.errors) setErrors(data.errors);
      }
    );
  };

  useEffect(() => {}, [credential, password]);

  return (
    <form onSubmit={handleSubmit}>
      <div className="field-group">
        <label> Username or Email</label>
        <input
          type="text"
          value={credential}
          onChange={(e) => setCredential(e.target.value)}
          // required
        />
      </div>
      <div className="field-group">
        <label> Password</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          // required
        />
      </div>
      <div className="button-group">
        <button type="submit">Log In</button>
        <button
          type="submit"
          onClick={() => {
            setCredential("Demo-lition");
            setPassword("password");
          }}
        >
          Demo
        </button>
      </div>

      <ul id="error-list">
        {errors.map((error, idx) => (
          <li id="errors" key={idx}>
            {error}
          </li>
        ))}
      </ul>
    </form>
  );
}

export default LoginForm;
