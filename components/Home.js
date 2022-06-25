import { useRouter } from "next/router";

import Image from "next/image";
import classes from "./Home.module.css";
import votingImg from "../assets/home-image.png";
import Navigation from "./Navigation";
import Advantages from "./Advantages";
import Footer from "./Footer";

const Home = () => {
  const router = useRouter();
  const onVoteHandler = () => {
    router.push("/login");
  };

  return (
    <>
      <div className={classes["home-container"]}>
        <Navigation />
        <div className={classes["home-content"]}>
          <div className={classes["home-container__details"]}>
            <h1 className={classes["detail-heading"]}>
              <span className={classes.online}>Online</span>
              <br />
              <span className={classes.voting}>voting</span>
            </h1>
            <div className={classes.underline}></div>
            <p className={classes["heading-description"]}>
              With the development of cryptography and Internet technology,
              electronic voting (E-voting) has gradually become a popular
              research direction.A blockchain voting system based on the
              feedback mechanism is proposed to solve the problem of the
              malicious votes behavior.
            </p>
            <div className={classes.button}>
              <button onClick={onVoteHandler}>Vote</button>
            </div>
          </div>
          <div className={classes["home-container__image"]}>
            <Image
              src={votingImg}
              alt="voting image"
              height="600px"
              width="900px"
            />
          </div>
        </div>
      </div>
      <Advantages />
      <Footer />
    </>
  );
};

export default Home;
