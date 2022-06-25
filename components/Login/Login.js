import Image from "next/image";
import { useState } from "react";

import Navigation from "../Navigation";
import classes from "./Login.module.css";
import loginImg from "../../assets/login-img.jpg";
import userImg from "../../assets/user-img.png";
import userPassword from "../../assets/password-img.png";

const LogIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginUserData, setLoginUserData] = useState({
    email: "",
    password: "",
  });

  const emailChangeHandler = (e) => {
    //console.log(e.target.value);
    setEmail(e.target.value);
  };

  const passwordChangeHandler = (e) => {
    //console.log(e.target.value);
    setPassword(e.target.value);
  };

  const onUserDataChangeHandler = (e) => {
    e.preventDefault();
    setUserData({
      email: email,
      password: password,
    });
    setEmail("");
    setPassword("");
    //console.log(loginUserData);
  };

  return (
    <>
      <Navigation />
      <div className={classes["login-container"]}>
        <div className={classes["login-img"]}>
          <div className={classes["login-img-image_container"]}>
            <Image
              src={loginImg}
              alt="voting image"
              height="875px"
              width="900px"
            />
          </div>
        </div>
        <div className={classes["login-form"]}>
          <div className={classes["login-form-heading_container"]}>
            <h1>WELCOME</h1>
          </div>
          <div className={classes["login-form_container"]}>
            <form onSubmit={onUserDataChangeHandler}>
              <div className={classes.email}>
                <div className={classes["email-img"]}>
                  <Image
                    src={userImg}
                    alt="voting image"
                    height="305px"
                    width="450px"
                  />
                </div>
                <div className={classes["email-enter"]}>
                  <label>Email</label>
                  <br />
                  <input
                    onChange={emailChangeHandler}
                    type="email"
                    value={email}
                    placeholder="Enter email"
                  />
                </div>
              </div>
              <br />
              <div className={classes.password}>
                <div className={classes["password-img"]}>
                  <Image
                    src={userPassword}
                    alt="voting image"
                    height="305px"
                    width="450px"
                  />
                </div>
                <div className={classes["password-enter"]}>
                  <label>Password</label>
                  <br />
                  <input
                    onChange={passwordChangeHandler}
                    type="password"
                    value={password}
                    placeholder="Enter password"
                  />
                  <br />
                </div>
              </div>
              <button type="submit">LOGIN</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default LogIn;
