import classes from "./StaffList.module.css";

import { useRef } from "react";
const StaffList = (props) => {
  const staffItem = useRef();
  const staff = props.staff;
  const col = props.col;
  const clickStaffItemHandler = () => {
    props.onClick(+staffItem.current.id);
  };
  const image = staff.image;
  return (
    <li
      ref={staffItem}
      className={`col-${col !== "6" ? 12 / col : 4} col-lg-${12 / col} ${
        classes["staff-item"]
      }`}
      id={staff.id}
      onClick={clickStaffItemHandler}
    >
      <div className={`p-2 ${classes["staff-content"]}`}>
        <img src={require(`${image}`)} className="img-fluid" alt="Staff" />
        <p className="m-0 mt-2">{staff.name}</p>
      </div>
    </li>
  );
};

export default StaffList;
