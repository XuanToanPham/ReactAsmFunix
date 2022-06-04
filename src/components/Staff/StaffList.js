import classes from "./StaffList.module.css";
import { useRef } from "react";
const StaffList = (props) => {
  const staffItem = useRef();
  const staff = props.staff;
  const clickStaffItemHandler = () => {
    props.onClick(staffItem.current);
  };
  return (
    <li
      ref={staffItem}
      className={`col-6 ${classes["staff-item"]}`}
      id={staff.id}
    >
      <p
        className={`p-2 ${classes["staff-content"]}`}
        onClick={clickStaffItemHandler}
      >
        {staff.name}
      </p>
    </li>
  );
};

export default StaffList;
