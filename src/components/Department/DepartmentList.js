import classes from "./DepartmentList.module.css";
import { Link } from "react-router-dom";
const DepartmentList = (props) => {
  const department = props.department;
  return (
    <li className={`col-4 ${classes["department-item"]}`}>
      <Link className={classes.link} to= {`/departmentList/${department.id}`}>
        <div className={`${classes["department-item-content"]}`}>
          <h3>{department.name} </h3>
          <p>Số lượng nhân viên : {department.numberOfStaff}</p>
        </div>
      </Link>
    </li>
  );
};

export default DepartmentList;
