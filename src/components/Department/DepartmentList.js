import classes from "./DepartmentList.module.css"
const DepartmentList = (props) => {
  const department = props.department;
  return (
    <li className={`col-4 ${classes['department-item']}`}>
      <div className={`${classes["department-item-content"]}`}>
        <h3>{department.name} </h3>
        <p>Số lượng nhân viên : {department.numberOfStaff}</p>
      </div>
    </li>
  );
};

export default DepartmentList;
