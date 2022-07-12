import fontawesome from "@fortawesome/fontawesome";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faList } from "@fortawesome/free-solid-svg-icons";
import { NavLink, useHistory } from "react-router-dom";
import classes from "./Nav.module.css";
import { useRef, useState } from "react";

import {useSelector} from "react-redux"
fontawesome.library.add(faUser, faList);
const Nav = () => {
  const listStaff = useSelector((state) => state.staffs.staffs)
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);

  const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);

  const inputSearch = useRef();
  const history = useHistory();
  const searchHandler = (e) => {
    e.preventDefault();
    const data = inputSearch.current.value;
    let infoStaff;
    if (data !== "") {
      infoStaff = listStaff.filter((staff) =>
        staff.name.toLowerCase().includes(data.toLowerCase())
      );
      console.log(infoStaff);
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
      <div className="container-fluid">
        <NavLink className="navbar-brand" to="/staffList">
          <span className={`${classes["header-content"]} col-4`}>
            {<FontAwesomeIcon icon="fa-solid fa-user" />}
          </span>
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarsExample09"
          aria-controls="navbarsExample09"
          aria-expanded={!isNavCollapsed ? true : false}
          aria-label="Toggle navigation"
          onClick={handleNavCollapse}
        >
          <span className="navbar-toggler-icon">{<FontAwesomeIcon style={{"color": "white", "fontSize":"2rem"}} icon="fa-solid fa-list" />}</span>
        </button>
        <div className={`${isNavCollapsed ? 'collapse' : ''} navbar-collapse`} id="navbarTogglerDemo01">
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
      </div>
    </nav>
  );
};

export default Nav;
