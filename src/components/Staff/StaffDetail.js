import fontawesome from "@fortawesome/fontawesome";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import classes from "./StaffDetail.module.css";
import dateFormat from "dateformat";
import { NavLink, useLocation, useParams } from "react-router-dom";
import { STAFFS } from "../Data/staffs";
fontawesome.library.add(faArrowRightFromBracket);
const StaffDetail = () => {
  
  const params = useParams();
  const idStaff = +params.staffId;
  const infoStaff = STAFFS.find((staff) => staff.id === idStaff);
  return (
    <div>
      <div className={classes["staff-container"]}>
        <NavLink
          className={classes["staff-button"]}
          style={{ color: "#EF3A3A" }}
          to="/staffList"
        >
          <FontAwesomeIcon icon="fa-solid fa-arrow-right-from-bracket" />
        </NavLink>
        <div className={`row p-2`}>
          <img src={require(`${infoStaff.image}`)} className="col-3 img-fluid"/>
          <div className="col-lg-9">
            <h3>Họ và tên: {infoStaff.name}</h3>
            <p>Ngày sinh: {dateFormat(infoStaff.doB, "dd/mm/yyyy")}</p>
            <p>
              Ngày vào công ty: {dateFormat(infoStaff.startDate, "dd/mm/yyyy")}
            </p>
            <p>Phòng ban: {infoStaff.department.name}</p>
            <p>
              Số ngày nghĩ còn lại:{" "}
              <span style={{ color: "#EF3A3A" }}>{infoStaff.annualLeave}</span>{" "}
            </p>
            <p>
              Số ngày đã làm thêm:
              <span style={{ color: "#3DA822" }}>{infoStaff.overTime}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StaffDetail;
