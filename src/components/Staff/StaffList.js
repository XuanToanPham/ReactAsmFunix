import classes from "./StaffList.module.css";
import { useRef } from "react";
const StaffList = (props) => {
  const staffItem = useRef();
  const staff = props.staff;
  const col = props.col;
  const clickStaffItemHandler = () => {
    props.onClick(+staffItem.current.id);
  };
  return (
    <li
      ref={staffItem}
      className={`col-${col!=="6"? 12/col : 4} col-lg-${12/col} ${classes["staff-item"]}`}
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
