import React, { useRef, useState } from "react";
import styles from "./Signupform.module.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Signupform = () => {
  // React States
  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const history = useNavigate();

  const username = useRef();
  const email = useRef();
  const password = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log(username.current.value);
    await axios
      .post(
        "https://backendtechno.onrender.com/user/signup",
        {
          username: username.current.value,
          emailId: email.current.value,
          password: password.current.value,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((res) => {
        localStorage.setItem("_id", res.data.user._id);
        localStorage.setItem("username", res.data.user.username);
        history("/");
      });
  };

  return (
    <div className={styles.signup}>
      <form>
        <h2>Sign Up</h2>
        <label htmlFor="name">Username</label>
        <input ref={username} type="text" id="name" />
        <label htmlFor="email">Email</label>
        <input ref={email} type="email" id="email" />
        <label htmlFor="pass">Password</label>
        <input ref={password} type="password" id="pass" />
        <button onClick={handleSubmit}>Sign Up</button>
      </form>
    </div>
  );
};

export default Signupform;
