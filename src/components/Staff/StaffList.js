import classes from "./StaffList.module.css";
import { useRef } from "react";
import { NavLink } from "react-router-dom";
const StaffList = (props) => {
  const staffItem = useRef();
  const staff = props.staff;
  const image = staff.image;
  return (
    <li
      ref={staffItem}
      className={`col-lg-2 col-md-4 col-6 ${
        classes["staff-item"]
      }`}
      id={staff.id}
    >
      <NavLink className="text-decoration-none" to={`/staffList/${staff.id}`}>
        <div className={`p-2 ${classes["staff-content"]}`}>
          <img src={require(`.${image}`)} className="img-fluid" alt="Staff" />
          <p className="m-0 mt-2">{staff.name}</p>
        </div>
      </NavLink>
    </li>
  );
};

export default StaffList;
