import Modal from "../Modal/Modal";
import Container from "react-bootstrap/esm/Container";
import classes from "./FormAdd.module.css";
import { useDispatch, useSelector } from "react-redux";
import {onCheckAddAction}from "../../../redux/reducer/staffReducer"
import axios from "axios";
import { loadingAction } from "../../../redux/reducer/notifyReduces";
import {formEditAction} from "../../../store/index"
import {
  inputNameAction,
  inputDateAction,
  inputDateStartAction,
  inputDepartmentAction,
  inputSalaryAction,
  inputLeaveAction,
  inputOvertimeAction,
} from "../../../store/index";

const FormEdit = (props) => {
  const getIdEdit = useSelector((state) =>state.formEdit.idEdit);
  console.log(getIdEdit);
  const dispatch = useDispatch();
  const errorMessageName = useSelector(
    (state) => state.inputName.messageErrorName
  );
  let isValidName = useSelector((state) => state.inputName.isValidName);
  const valueName = useSelector((state) => state.inputName.valueName);

  //Input Date
  const errorMessageDate = useSelector(
    (state) => state.inputDate.messageErrorDate
  );
  let isValidDate = useSelector((state) => state.inputDate.isValidDate);
  const valueDate = useSelector((state) => state.inputDate.valueDate);
  // Input DateStart
  const errorMessageDateStart = useSelector(
    (state) => state.inputDateStart.messageErrorDateStart
  );
  let isValidDateStart = useSelector(
    (state) => state.inputDateStart.isValidDateStart
  );
  const valueDateStart = useSelector(
    (state) => state.inputDateStart.valueDateStart
  );

  // Input Department

  const errorMessageDepartment = useSelector(
    (state) => state.inputDepartment.messageErrorDepartment
  );
  let isValidDepartment = useSelector(
    (state) => state.inputDepartment.isValidDepartment
  );
  const valueDepartment = useSelector(
    (state) => state.inputDepartment.valueDepartment
  );

  // Input Salary
  const errorMessageSalary = useSelector(
    (state) => state.inputSalary.messageErrorSalary
  );
  let isValidSalary = useSelector((state) => state.inputSalary.isValidSalary);
  const valueSalary = useSelector((state) => state.inputSalary.valueSalary);

  //Input Leave
  const errorMessageLeave = useSelector(
    (state) => state.inputLeave.messageErrorLeave
  );
  let isValidLeave = useSelector((state) => state.inputLeave.isValidLeave);
  const valueLeave = useSelector((state) => state.inputLeave.valueLeave);

  //Input Overtime
  const errorMessageOvertime = useSelector(
    (state) => state.inputOvertime.messageErrorOvertime
  );
  let isValidOvertime = useSelector(
    (state) => state.inputOvertime.isValidOvertime
  );
  const valueOvertime = useSelector(
    (state) => state.inputOvertime.valueOvertime
  );
  const submitedHandler = (event) => {
    event.preventDefault();
   
    if (
      valueName.trim() !== "" &&
      valueDate.trim() !== "" &&
      valueDateStart.trim() !== "" &&
      valueDepartment.trim() !== "" &&
      toString(valueSalary).trim() !== "" &&
      toString(valueLeave).trim() !== "" &&
      toString(valueOvertime).trim() !== ""
    ) {
      console.log(1);
      const editStaff = {
        id: getIdEdit,
        name: valueName,
        doB: valueDate,
        salaryScale: +valueSalary,
        startDate: valueDateStart,
        departmentId: valueDepartment,
        annualLeave: +valueLeave,
        overTime: +valueOvertime,
        salary: valueSalary * 300000 + valueOvertime * 2000000,
        image: "/assets/images/alberto.png",
      };
      const sendRequest = async () => {
        dispatch(loadingAction.loading);
        await axios.patch(
          `https://rjs101xbackend.herokuapp.com/staffs`,
          editStaff
        );
        dispatch(loadingAction.finishLoading);
        dispatch(onCheckAddAction.susccessAdd(true));
        dispatch(formEditAction.hideFormEdit());

      };
      sendRequest();
      

    } else {
      if (valueName.trim() === "") {
        dispatch(inputNameAction.isValidName(""));
      }
      if (valueDate.trim() === "") {
        dispatch(inputDateAction.isValidDate(""));
      }
      if (valueDateStart.trim() === "") {
        dispatch(inputDateStartAction.isValidDateStart(""));
      }
      if (valueDepartment.trim() === "") {
        dispatch(inputDepartmentAction.isValidDepartment(""));
      }
      if (valueSalary.trim() === "") {
        dispatch(inputSalaryAction.isValidSalary(""));
      }
      if (valueLeave.trim() === "") {
        dispatch(inputLeaveAction.isValidLeave(""));
      }
      if (valueOvertime.trim() === "") {
        dispatch(inputOvertimeAction.isValidOvertime(""));
      }
      console.log(2);
    }
  };
  return (
    <Modal onClose={props.onClose}>
      <Container>
        <form onSubmit={submitedHandler}>
          <legend>Cập nhật thông tin</legend>
          <div className="mb-2 row">
            <label className="col-3" htmlFor="">
              Tên
            </label>
            <div className="col-9">
              <input
                type={`text`}
                className={`form-control ${
                  !isValidName ? classes.invalid : ""
                } `}
                id="name-input"
                value={valueName}
                onChange={(event) => {
                  dispatch(inputNameAction.isValidName(event.target.value));
                }}
                onBlur={(event) => {
                  dispatch(inputNameAction.isValidName(event.target.value));
                }}
              />
              {!isValidName && (
                <span className={classes.error}>{errorMessageName}</span>
              )}
            </div>
          </div>
          <div className="mb-2 row">
            <label className="col-3" htmlFor="">
              Ngày sinh
            </label>
            <div className="col-9">
              <input
                type={`date`}
                className={`form-control ${
                  !isValidDate ? classes.invalid : ""
                } `}
                id="date-birth-input"
                value={valueDate}
                onChange={(event) => {
                  dispatch(inputDateAction.isValidDate(event.target.value));
                }}
                onBlur={(event) => {
                  dispatch(inputDateAction.isValidDate(event.target.value));
                }}
              />
              {!isValidDate && (
                <span className={classes.error}>{errorMessageDate}</span>
              )}
            </div>
          </div>
          <div className="mb-2 row">
            <label className="col-3" htmlFor="">
              Ngày vào công ty
            </label>
            <div className="col-9">
              <input
                type={`date`}
                className={`form-control ${
                  !isValidDateStart ? classes.invalid : ""
                } `}
                id="date-start-input"
                value={valueDateStart}
                onChange={(event) => {
                  dispatch(
                    inputDateStartAction.isValidDateStart(event.target.value)
                  );
                }}
                onBlur={(event) => {
                  dispatch(
                    inputDateStartAction.isValidDateStart(event.target.value)
                  );
                }}
                
              />
              {!isValidDateStart && (
                <span className={classes.error}>{errorMessageDateStart}</span>
              )}
            </div>
          </div>
          <div className="mb-2 row">
            <label className="col-3" htmlFor="">
              Phòng ban
            </label>
            <div className="col-9">
              <select
                className={`form-select ${
                  !isValidDepartment ? classes.invalid : ""
                } `}
                onChange={(event) => {
                  dispatch(
                    inputDepartmentAction.isValidDepartment(event.target.value)
                  );
                }}
                value={valueDepartment}
                onBlur={(event) => {
                  dispatch(
                    inputDepartmentAction.isValidDepartment(event.target.value)
                  );
                }}
              >
                <option value="">Chọn phòng ban</option>
                <option value="Dept01">Sale</option>
                <option value={`Dept02`}>HR</option>
                <option value={`Dept03`}>Marketing</option>
                <option value={`Dept04`}>IT</option>
                <option value={`Dept05`}>Finance</option>
              </select>
              {!isValidDepartment && (
                <span className={classes.error}>{errorMessageDepartment}</span>
              )}
            </div>
          </div>
          <div className="mb-2 row">
            <label className="col-3" htmlFor="">
              Hệ số lương
            </label>
            <div className="col-9">
              <input
                type={`number`}
                className={`form-control ${
                  !isValidSalary ? classes.invalid : ""
                } `}
                id="salaryScale-input"
                value={valueSalary}
                min={1}
                max={3}
                placeholder="1.0 -> 3.0"
                pattern="[+-]?\d+(?:[.,]\d+)?"
                step={0.1}
                onChange={(event) => {
                  dispatch(inputSalaryAction.isValidSalary(event.target.value));
                }}
                onBlur={(event) => {
                  dispatch(inputSalaryAction.isValidSalary(event.target.value));
                }}
              />
              {!isValidSalary && (
                <span className={classes.error}>{errorMessageSalary}</span>
              )}
            </div>
          </div>
          <div className="mb-2 row">
            <label className="col-3" htmlFor="">
              Số ngày nghĩ còn lại
            </label>
            <div className="col-9">
              <input
                type={`number`}
                className={`form-control ${
                  !isValidLeave ? classes.invalid : ""
                } `}
                value={valueLeave}
                id="annualLeave-input"
                min={`0`}
                placeholder="1.0"
                onChange={(event) => {
                  dispatch(inputLeaveAction.isValidLeave(event.target.value));
                }}
                onBlur={(event) => {
                  dispatch(inputLeaveAction.isValidLeave(event.target.value));
                }}
              />
              {!isValidLeave && (
                <span className={classes.error}>{errorMessageLeave}</span>
              )}
            </div>
          </div>
          <div className="mb-2 row">
            <label className="col-3" htmlFor="">
              Số ngày đã làm thêm
            </label>
            <div className="col-9">
              <input
                type={`number`}
                className={`form-control ${
                  !isValidOvertime ? classes.invalid : ""
                } `}
                value={valueOvertime}
                id="overtime-input"
                min={`1.0`}
                placeholder="1.0"
                onChange={(event) => {
                  dispatch(
                    inputOvertimeAction.isValidOvertime(event.target.value)
                  );
                }}
                onBlur={(event) => {
                  dispatch(
                    inputOvertimeAction.isValidOvertime(event.target.value)
                  );
                }}
              />
              {!isValidOvertime && (
                <span className={classes.error}>{errorMessageOvertime}</span>
              )}
            </div>
          </div>
          <div className="mb-2 row">
            <button
              className="btn btn-danger col-6"
              type="button"
              onClick={props.onClose}
            >
              Thoát
            </button>

            <button className="btn btn-primary col-6" type="submit">
              Cập nhật
            </button>
          </div>
        </form>
      </Container>
    </Modal>
  );
};

export default FormEdit;
