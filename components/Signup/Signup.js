import Image from "next/image";
import { useState, useRef } from "react";

import Navigation from "../Navigation";
import classes from "./Signup.module.css";
import signupImg from "../../assets/signup-img.jpg";
const Signup = () => {
  const userName = useRef("");
  const userEmail = useRef("");
  const userPhone = useRef("");
  const userDob = useRef("");
  const userPassword = useRef("");

  const [signupUserData, setSignupUserData] = useState({
    name: "",
    email: "",
    phone: "",
    dob: "",
    password: "",
  });

  const userSignupDataHandler = (e) => {
    e.preventDefault();
    setSignupUserData({
      name: userName.current.value,
      email: userEmail.current.value,
      phone: userPhone.current.value,
      dob: userDob.current.value,
      password: userPassword.current.value,
    });

    console.log(signupUserData);
    // resetting value of input fields to empty
    userName.current.value = "";
    userEmail.current.value = "";
    userPhone.current.value = "";
    userDob.current.value = "";
    userPassword.current.value = "";
  };

  return (
    <>
      <Navigation />
      <div className={classes["signup-container"]}>
        <div className={classes["signup-img"]}>
          <div className={classes["signup-img-image_container"]}>
            <Image
              src={signupImg}
              alt="voting image"
              height="875px"
              width="900px"
            />
          </div>
        </div>
        <div className={classes["signup-form"]}>
          <h1>Create Account</h1>
          <form onSubmit={userSignupDataHandler} className={classes.form}>
            <label>Name</label>
            <br />
            <input ref={userName} type="text" placeholder="Enter Name"></input>
            <br />
            <label>Email</label>
            <br />
            <input
              ref={userEmail}
              type="email"
              placeholder="Enter Email"
            ></input>
            <br />
            <label>Phone</label>
            <br />
            <input
              ref={userPhone}
              type="tel"
              maxLength="10"
              placeholder="Enter Phone Number"
            ></input>
            <br />
            <label>Date Of Birth</label>
            <br />
            <input ref={userDob} type="date" maxLength="10"></input>
            <br />
            <label>New Password</label>
            <br />
            <input
              ref={userPassword}
              type="text"
              placeholder="Enter Password"
            ></input>
            <br />
            <button type="submit">SIGN UP</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Signup;
