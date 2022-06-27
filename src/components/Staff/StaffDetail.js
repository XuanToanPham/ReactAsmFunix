import fontawesome from "@fortawesome/fontawesome";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import classes from "./StaffDetail.module.css";
import dateFormat from "dateformat";
import { NavLink, useParams } from "react-router-dom";
import axios from "axios";
import { staffsAction } from "../../redux/reducer/staffReducer";
import { useCallback, useEffect } from "react";

import { useSelector, useDispatch } from "react-redux";
fontawesome.library.add(faArrowRightFromBracket);
const StaffDetail = (props) => {
  const dispatch = useDispatch();
  const staffs = useSelector((state) => state.staffs.staffs);
  const departments = useSelector((state) => state.department.departments)
  console.log(staffs);
  const params = useParams();
  const idStaff = +params.staffId;
  let infoStaff = staffs.find((staff) => staff.id === idStaff);
  let departmentName;
  let loading = true;
  if(staffs.length > 0){
    loading = false;
    departmentName = departments.find((department) => department.id === infoStaff.departmentId);
  }
  return (
    <div className="p-5">
      {loading ? (
        <div> Loading</div>
      ) : (
        <div className={classes["staff-container"]}>
          <NavLink
            className={classes["staff-button"]}
            style={{ color: "#EF3A3A" }}
            to="/staffList"
          >
            <FontAwesomeIcon icon="fa-solid fa-arrow-right-from-bracket" />
          </NavLink>
          <div className={`row p-2`}>
            <img
              src={require(`.${infoStaff.image}`)}
              className="col-lg-3 col-12 col-md-4 img-fluid"
              alt="staff"
            />
            <div className="col-lg-9 col-12 col-md-8">
              <h3>Họ và tên: {infoStaff.name}</h3>
              <p>Ngày sinh: {dateFormat(infoStaff.doB, "dd/mm/yyyy")}</p>
              <p>
                Ngày vào công ty:{" "}
                {dateFormat(infoStaff.startDate, "dd/mm/yyyy")}
              </p>
              <p>Phòng ban: {departmentName.name}</p>
              <p>
                Số ngày nghĩ còn lại:{" "}
                <span style={{ color: "#EF3A3A" }}>
                  {infoStaff.annualLeave}
                </span>{" "}
              </p>
              <p>
                Số ngày đã làm thêm:
                <span style={{ color: "#3DA822" }}>{infoStaff.overTime}</span>
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default StaffDetail;
