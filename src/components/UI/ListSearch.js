import Container from "react-bootstrap/esm/Container";
import classes from "./ListSearch.module.css";
import { useRef } from "react";
import { NavLink, useLocation } from "react-router-dom";
const ListSearch = () => {
  const staffItem = useRef();
  const location = useLocation();
  let staff;

  if (location.state.listSearch) {
    staff = location.state.listSearch;
  }
  
  const clickStaffItemHandler = () => {};
  return (
    <Container>
      <ul className="row">
        {staff.map((staff) => (
          <li
            ref={staffItem}
            className={`col-6 col-lg-3 ${classes["staff-item"]}`}
            id={staff.id}
            onClick={clickStaffItemHandler}
            key={staff.id}
          >
            <NavLink
              className="text-decoration-none"
              to={`/staffList/${staff.id}`}
            >
              <div className={`p-2 ${classes["staff-content"]}`}>
                <p className="m-0 mt-2">{staff.name}</p>
              </div>
            </NavLink>
          </li>
        ))}
      </ul>
    </Container>
  );
};

export default ListSearch;
