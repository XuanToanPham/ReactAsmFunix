import fontawesome from "@fortawesome/fontawesome";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { NavLink, useHistory } from "react-router-dom";
import classes from "./Nav.module.css";
import { useRef} from "react";
import { STAFFS } from "../../Data/staffs";
fontawesome.library.add(faUser);
const Nav = () => {
  const inputSearch = useRef();
  const history = useHistory();
  const searchHandler = (e) => {
    e.preventDefault();
    const data = inputSearch.current.value;
    let infoStaff;
    if (data !== "") {
      infoStaff = STAFFS.filter((staff) => staff.name.toLowerCase().includes(data.toLowerCase()));
      console.log(infoStaff)
      if (infoStaff.length > 1) {
        history.push({
          pathname: "/listSearch",
          state: {
            listSearch: infoStaff,
          },
        });
      } else if (infoStaff.length === 1) {
        history.push(`/staffList/${infoStaff[0].id}`);
      } else {
        history.push("/notFoundStaff");
      }
    }
  };

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
                  Bảng Lương
                </NavLink>
              </li>
              <li className={`nav-item`}>
                <NavLink
                  className={`nav-link fs-5 fw-bold ${classes["nav-link"]}`}
                  aria-current="page"
                  to="/departmentList"
                >
                  Phòng ban
                </NavLink>
              </li>
            </ul>
            <form className="d-flex" onSubmit={searchHandler}>
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
                ref={inputSearch}
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
