/* eslint-disable no-console */
/* eslint-disable no-alert */
/* eslint-disable arrow-body-style */
/* eslint-disable object-shorthand */
/* eslint-disable no-unused-vars */
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import "./signUpForm.css";
import { setError } from "../../store/features/user/userSlice";

const SignUpForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const signup = (event) => {
    event.preventDefault();
    if (confirmPassword === password) {
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
          window.localStorage.setItem("token", response.token);
          navigate("/", { replace: true });
        })
        .catch((error) => dispatch(setError()));
    } else {
      dispatch(setError());
      setPassword("");
      setConfirmPassword("");
    }
  };

  const error = useSelector((state) => state.user.error);


  return (
    <form onSubmit={signup} className="signup__form--container">
      {error ? (
        <div className="error">
          <p>
            Une erreur s`est produite, surement les mots de passe ne
            correspondent
          </p>
        </div>
      ) : null}
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
          type="password"
          placeholder="confirm password"
          className="signup__form--password__input"
          onChange={(event) => {
            setConfirmPassword(event.target.value);
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
