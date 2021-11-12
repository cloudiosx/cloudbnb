import React, { useEffect, useState } from "react";
import * as sessionActions from "../../store/session";
import { useDispatch } from "react-redux";

function LoginForm() {
  const dispatch = useDispatch();
  const [credential, setCredential] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors([]);
    return dispatch(sessionActions.login({ credential, password })).catch(
      async (res) => {
        const data = await res.json();
        if (data && data.errors) setErrors(data.errors);
      }
    );
  };

  useEffect(() => {
    const validationErrors = [];

    if (!credential) {
      validationErrors.push("Please provide a username or email");
    }
    if (!password) {
      validationErrors.push("Please provide a valid password");
    }

    setErrors(validationErrors);
  }, [credential, password]);

  return (
    <form onSubmit={handleSubmit}>
      <ul id="error-list">
        {errors.map((error, idx) => (
          <li id="errors" key={idx}>
            {error}
          </li>
        ))}
      </ul>
      <label>
        Username or Email
        <input
          type="text"
          value={credential}
          onChange={(e) => setCredential(e.target.value)}
          required
        />
      </label>
      <label>
        Password
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </label>
      <button type="submit" disabled={errors.length > 0}>
        Log In
      </button>
    </form>
  );
}

export default LoginForm;
