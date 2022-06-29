
import classes from "./PayrollList.module.css";
const PayrollList = (props) => {
    const staff = props.staff
    const salary = (staff.salaryScale * 3000000 + staff.overTime * 200000).toFixed(0)
  return (
    <li className={`col-12 col-md-6 col-lg-4 ${classes["payroll-item"]}`}>
      <div className={`${classes['item-content']}`}>
        <h3>{staff.name}</h3>
        <p>Mã nhân viên {staff.id}</p>
        <p>Số ngày làm thêm {staff.overTime}</p>
        <p>Lương: {salary}</p>
      </div>
    </li>
  );
};

export default PayrollList;
