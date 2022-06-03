import classes from "./StaffList.module.css"
const StaffList = (props) => {
  const staffs = props.staffs;
  return (
    <ul className="row p-0">
      {staffs.map(staff => (
          <li className={`col-6 ${classes["staff-item"]}`} key={staff.id}>
              <p className={`p-2 ${classes["staff-content"]}`}>{staff.name}</p>
          </li>
      ))}
    </ul>
  );
};

export default StaffList;
