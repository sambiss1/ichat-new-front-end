/* eslint-disable no-console */
/* eslint-disable no-alert */
/* eslint-disable arrow-body-style */
/* eslint-disable object-shorthand */
import { useState } from "react";
import axios from "axios";
import "./signUpForm.css";
import { useNavigate } from "react-router-dom";

const SignUpForm = () => {
  const navigate = useNavigate();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const signup = (event) => {
    event.preventDefault();
    axios({
      method: "POST",
      url: `http://localhost:8000/api/user/signup`,
      data: {
        firstName: firstName,
        lastName: lastName,
        userName: userName,
        email: email,
        password: password,
      },
      headers: { "Content-Type": "application/json" },
    })
      .then((response) => {
        alert("Account created");
        window.localStorage.setItem("token", response.token);
        navigate("/", { replace: true });
      })
      .catch((error) => console.error(error));
  };
  return (
    <form onSubmit={signup} className="signup__form--container">
      <p>
        <input
          type="text"
          placeholder="first name"
          className="signup__form--firstname__input"
          onChange={(event) => {
            setFirstName(event.target.value);
          }}
        />
      </p>
      <p>
        <input
          type="text"
          placeholder="last name"
          className="signup__form--lastname__input"
          value={lastName}
          onChange={(event) => {
            setLastName(event.target.value);
          }}
        />
      </p>

      <p>
        <input
          type="text"
          placeholder="username"
          className="signup__form--username__input"
          onChange={(event) => {
            setUserName(event.target.value);
          }}
        />
      </p>
      <p>
        <input
          type="text"
          placeholder="email"
          className="signup__form--email__input"
          onChange={(event) => {
            setEmail(event.target.value);
          }}
        />
      </p>
      <p>
        <input
          type="password"
          placeholder="password"
          className="signup__form--password__input"
          onChange={(event) => {
            setPassword(event.target.value);
          }}
        />
      </p>
      <p>
        <input
          type="submit"
          value="Sign Up"
          className="signup__form--submit__button"
        />
      </p>
    </form>
  );
};

export default SignUpForm;
