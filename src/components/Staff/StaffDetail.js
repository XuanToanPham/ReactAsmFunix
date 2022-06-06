import fontawesome from "@fortawesome/fontawesome";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRight,
  faArrowRightFromBracket,
} from "@fortawesome/free-solid-svg-icons";
import classes from "./StaffDetail.module.css";
import dateFormat from "dateformat";
fontawesome.library.add(faArrowRightFromBracket);
const StaffDetail = (props) => {
  const infoStaff = props.infoStaff;
  const clickExitHandler = ()=>{
    props.onClick(null)
  }
  return (
    <div className={`col-6`}>
      <div className={classes["staff-container"]}>
        <button className={classes["staff-button"]} onClick={clickExitHandler}>
          <FontAwesomeIcon icon="fa-solid fa-arrow-right-from-bracket" />
        </button>
        <div className={`p-2`}>
          <h3>Họ và tên:{infoStaff.name}</h3>
          <p>Ngày sinh: {dateFormat(infoStaff.doB, "dd/mm/yyyy")}</p>
          <p>
            Ngày vào công ty: {dateFormat(infoStaff.startDate, "dd/mm/yyyy")}
          </p>
          <p>Phòng ban: {infoStaff.department.name}</p>
          <p>Số ngày nghĩ còn lại: {infoStaff.annualLeave}</p>
          <p>Số ngày đã làm thêm: {infoStaff.overTime}</p>
        </div>
      </div>
    </div>
  );
};

export default StaffDetail;
