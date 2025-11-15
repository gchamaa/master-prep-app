import { Link, NavLink } from "react-router";
import "./App.css";

function Nav() {
  return (
    <>
      <nav>
        <ul>
          <li>
            <NavLink to="/">App</NavLink>
          </li>
          <li>
            <NavLink to="/home">Home</NavLink>
          </li>
          <li>
            <Link to="/About">About</Link>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Nav;
