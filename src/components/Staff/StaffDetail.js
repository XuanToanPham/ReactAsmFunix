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
    <div className={`col-12`}>
      <div className={classes["staff-container"]}>
        <button className={classes["staff-button"]} onClick={clickExitHandler} style={{color: "#EF3A3A"}}>
          <FontAwesomeIcon icon="fa-solid fa-arrow-right-from-bracket" />
        </button>
        <div className={`p-2`}>
          <h3>Họ và tên: {infoStaff.name}</h3>
          <p>Ngày sinh: {dateFormat(infoStaff.doB, "dd/mm/yyyy")}</p>
          <p>
            Ngày vào công ty: {dateFormat(infoStaff.startDate, "dd/mm/yyyy")}
          </p>
          <p>Phòng ban: {infoStaff.department.name}</p>
          <p>Số ngày nghĩ còn lại: <span  style={{color: "#EF3A3A"}}>{infoStaff.annualLeave}</span> </p>
          <p>Số ngày đã làm thêm:<span  style={{color: "#3DA822"}}>{infoStaff.overTime}</span></p>
        </div>
      </div>
    </div>
  );
};

export default StaffDetail;
