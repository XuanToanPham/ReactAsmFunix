import fontawesome from "@fortawesome/fontawesome";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";

import classes from "./Nav.module.css";
fontawesome.library.add(faUser);
const Nav = () => {
  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container-fluid d-block">
        <nav className="navbar">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo01"
            aria-controls="navbarTogglerDemo01"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
            <NavLink className="navbar-brand" to="/staffList">
              <span className={`${classes["header-content"]} col-4`}>
                {<FontAwesomeIcon icon="fa-solid fa-user" />}
              </span>
            </NavLink>
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink
                  className={`nav-link fs-5 fw-bold ${classes["nav-link"]}`}
                  aria-current="page"
                  to="/staffList"
                >
                  Nhân Sự
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className={`nav-link fs-5 fw-bold ${classes["nav-link"]}`}
                  aria-current="page"
                  to="/payrollList"
                >
                  Nhân Sự
                </NavLink>
              </li>
              <li className={`nav-item`}>
                <NavLink
                  className={`nav-link fs-5 fw-bold ${classes["nav-link"]}`}
                  aria-current="page"
                  to="/staffList"
                >
                  Nhân Sự
                </NavLink>
              </li>
            </ul>
            <form className="d-flex">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          </div>
        </nav>
      </div>
    </nav>
  );
};

export default Nav;
