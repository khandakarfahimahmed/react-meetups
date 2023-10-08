import { Link } from "react-router-dom";

import classes from "./MainNavigation.module.css";

function MainNavigation() {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>
        React Meetups
        <nav>
          <li>
            <Link to="/">All Meetups</Link>
          </li>
          <li>
            <Link to="/new-meetup">Add New Meetup</Link>
            <li>
              <Link to="/favourites">My Favourites</Link>
            </li>
          </li>
        </nav>
      </div>
    </header>
  );
}

export default MainNavigation;
