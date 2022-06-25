import Link from "next/Link";

import classes from "./Navigation.module.css";

const Navigation = () => {
  return (
    <div className={classes["nav-container"]}>
      <nav className={classes.navigation}>
        <div className={classes["nav-logo"]}>Hashed</div>
        <ul>
          <Link href="/">
            <li>Home</li>
          </Link>
          <Link href="/login">
            <li>Log in</li>
          </Link>
          <Link href="/signup">
            <li>Sign up</li>
          </Link>
          <Link href="/HowToUse">
            <li>How To Use</li>
          </Link>
        </ul>
      </nav>
    </div>
  );
};

export default Navigation;
