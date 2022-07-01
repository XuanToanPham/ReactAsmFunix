import fontawesome from "@fortawesome/fontawesome";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRightFromBracket,
  faPen,
  faUserXmark,
} from "@fortawesome/free-solid-svg-icons";
import classes from "./StaffDetail.module.css";
import dateFormat from "dateformat";
import { NavLink, Redirect, useHistory, useParams } from "react-router-dom";
import { formEditAction } from "../../store/index";
import { useDispatch, useSelector } from "react-redux";
import { loadingAction } from "../../redux/reducer/notifyReduces";
import NotifyLoading from "../UI/Notify/NotifyLoading";
import {
  inputNameAction,
  inputDateAction,
  inputDateStartAction,
  inputDepartmentAction,
  inputSalaryAction,
  inputLeaveAction,
  inputOvertimeAction,
} from "../../store/index";
import { notifyAction } from "../../redux/reducer/notifyReduces";
import { Fragment } from "react";
fontawesome.library.add(faArrowRightFromBracket, faPen, faUserXmark);
const StaffDetail = () => {
  const departments = useSelector((state) => state.department.departments);
  const dispatch = useDispatch();
  const staffs = useSelector((state) => state.staffs.staffs);
  const params = useParams();
  const idStaff = +params.staffId;
  const infoStaff = staffs.find((staff) => staff.id === idStaff);
  const checkLoading = useSelector((state) => state.loading.checkLoading);
  const chekStaffDelete = useSelector(
    (state) => state.notify.checkShowModalNotify
  );
  let departmentName;
  let loading = true;
  if (staffs.length > 0 && departments.length > 0) {
    loading = false;
    departmentName = departments.find(
      (department) => department.id === infoStaff.departmentId
    ).name;
  }
  const formatDate = (date) => {
    let d = new Date(date);
    let month = (d.getMonth() + 1).toString();
    let day = d.getDate().toString();
    let year = d.getFullYear();
    if (month.length < 2) {
      month = "0" + month;
    }
    if (day.length < 2) {
      day = "0" + day;
    }
    return [year, month, day].join("-");
  };
  const showFormEdit = () => {
    dispatch(formEditAction.showFormEdit());
    dispatch(inputNameAction.updateData(infoStaff.name));
    dispatch(inputDateAction.updateData(formatDate(new Date(infoStaff.doB))));
    dispatch(
      inputDateStartAction.updateData(formatDate(new Date(infoStaff.startDate)))
    );
    dispatch(inputDepartmentAction.updateData(infoStaff.departmentId));
    dispatch(inputSalaryAction.updateData(infoStaff.salaryScale));
    dispatch(inputLeaveAction.updateData(infoStaff.annualLeave));
    dispatch(inputOvertimeAction.updateData(infoStaff.overTime));
    dispatch(formEditAction.getIdEdit(+params.staffId));
  };
  const deleteHandler = () => {
    dispatch(
      notifyAction.ShownotifyDelete({ name: infoStaff.name, id: infoStaff.id })
    );
  };

  return (
    <div className="p-5">
      {loading ? (
        <NotifyLoading />
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
              <p>Phòng ban: {departmentName}</p>
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
          <div className="row ms-2">
            <div className="col-6">
              <button className={`btn btn-primary`} onClick={showFormEdit}>
                <FontAwesomeIcon icon="fa-solid fa-pen" /> Thay đổi thông tin
              </button>
            </div>
            <div className="col-6" style={{ direction: "rtl" }}>
              <button className={`btn btn-danger`} onClick={deleteHandler}>
                Xóa nhân viên <FontAwesomeIcon icon="fa-solid fa-user-xmark" />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default StaffDetail;
