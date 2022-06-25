import Image from "next/image";

import classes from "./Footer.module.css";
import copyrightImg from "../assets/copyright-img.png";

const Footer = () => {
  return (
    <div className={classes.footer}>
      <p>
        Copyright
        <span>
          <Image
            src={copyrightImg}
            alt="copyright image"
            height="20px"
            width="20px"
          />
        </span>
        Team Hashed 2022. All Rights Reserved
      </p>
    </div>
  );
};

export default Footer;
