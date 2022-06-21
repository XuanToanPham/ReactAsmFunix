import Modal from "../Modal/Modal";
import Container from "react-bootstrap/esm/Container";
import useInput from "../../../Hooks/use-input";
import classes from "./FormAdd.module.css";
const FormAdd = () => {
  const submitedHandler = (event) => {
    event.preventDefault();
  };
  const {
    value: enterName,
    isValid: enteredNameIsValid,
    hasError: nameInputHasError,
    valueChangeHandler: nameChangeHandler,
    inputBlurHandler: nameBlurHandler,
    messageError: nameMessageError,
  } = useInput((value) => [
    { error: "Requied", check: value.trim() !== "" },
    { error: "inputName", check: value.trim().length > 2 },
  ]);
  const {
    value: enterDate,
    isValid: enteredDateIsValid,
    hasError: dateInputHasError,
    valueChangeHandler: dateChangeHandler,
    inputBlurHandler: dateBlurHandler,
    messageError: dateMessageError,
  } = useInput((value) => [{ error: "Requied", check: value.trim() !== "" }]);
  const {
    value: enterDateStart,
    isValid: enteredDateStartIsValid,
    hasError: dateStartInputHasError,
    valueChangeHandler: dateStartChangeHandler,
    inputBlurHandler: dateStartBlurHandler,
    messageError: dateStartMessageError,
  } = useInput((value) => [{ error: "Requied", check: value.trim() !== "" }]);
  const {
    value: enterDeparment,
    isValid: enteredDeparmentIsValid,
    hasError: deparmentInputHasError,
    valueChangeHandler: deparmentChangeHandler,
    inputBlurHandler: deparmentBlurHandler,
    messageError: deparmentMessageError,
  } = useInput((value) => [{ error: "Requied", check: value.trim() !== "" }]);

  const {
    value: enterSalary,
    isValid: enteredSalaryIsValid,
    hasError: salaryInputHasError,
    valueChangeHandler: salaryChangeHandler,
    inputBlurHandler: salaryBlurHandler,
    messageError: salaryMessageError,
  } = useInput((value) => [{ error: "Requied", check: value.trim() !== "" }]);
  const {
    value: enterLeave,
    isValid: enteredLeaveIsValid,
    hasError: leaveInputHasError,
    valueChangeHandler: leaveChangeHandler,
    inputBlurHandler: leaveBlurHandler,
    messageError: leaveMessageError,
  } = useInput((value) => [{ error: "Requied", check: value.trim() !== "" }]);

  const {
    value: enterOvertime,
    isValid: enteredOvertimeIsValid,
    hasError: overtimeInputHasError,
    valueChangeHandler: overtimeChangeHandler,
    inputBlurHandler: overtimeBlurHandler,
    messageError: overtimeMessageError,
  } = useInput((value) => [{ error: "Requied", check: value.trim() !== "" }]);
  return (
    <Modal>
      <Container>
        <form onSubmit={submitedHandler}>
          <legend>Thêm nhân viên</legend>
          <div className="mb-2 row">
            <label className="col-3" htmlFor="">
              Tên
            </label>
            <div className="col-9">
              <input
                type={`text`}
                className="form-control"
                id="name-input"
                value={enterName}
                onChange={nameChangeHandler}
                onBlur={nameBlurHandler}
              />
              {nameInputHasError && (
                <span className={classes.error}>{nameMessageError}</span>
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
                className="form-control"
                id="date-birth-input"
                onChange={dateChangeHandler}
                onBlur={dateBlurHandler}
                value={enterDate}
              />
              {dateInputHasError && (
                <span className={classes.error}>{dateMessageError}</span>
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
                className="form-control"
                id="date-start-input"
                onBlur={dateStartBlurHandler}
                onChange={dateStartChangeHandler}
                value={enterDateStart}
              />
              {dateStartInputHasError && (
                <span className={classes.error}>{dateStartMessageError}</span>
              )}
            </div>
          </div>
          <div className="mb-2 row">
            <label className="col-3" htmlFor="">
              Phòng ban
            </label>
            <div className="col-9">
              <select
                className="form-select"
                onBlur={deparmentBlurHandler}
                onChange={deparmentChangeHandler}
                value={enterDeparment}
              >
                <option>Chọn phòng ban</option>
                <option value="Sale">Sale</option>
                <option value={`HR`}>HR</option>
                <option value={`Marketing`}>Marketing</option>
                <option value={`IT`}>IT</option>
                <option value={`Finance`}>Finance</option>
              </select>
              {deparmentInputHasError && (
                <span className={classes.error}>{deparmentMessageError}</span>
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
                className="form-control"
                id="salaryScale-input"
                min={`0`}
                max = {`3.0`}
                placeholder="1.0 -> 3.0"
                onChange={salaryChangeHandler}
                onBlur={salaryBlurHandler}
                value={enterSalary}
              />
              {salaryInputHasError && (
                <span className={classes.error}>{salaryMessageError}</span>
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
                className="form-control"
                id="annualLeave-input"
                min={`0`}
                placeholder="1.0"
                onBlur={leaveBlurHandler}
                onChange= {leaveChangeHandler}
                value = {enterLeave}
              />
                {leaveInputHasError && (
                <span className={classes.error}>{leaveMessageError}</span>
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
                className="form-control"
                id="overtime-input"
                min={`1.0`}
                placeholder="1.0"
                onChange={overtimeChangeHandler}
                onBlur = {overtimeBlurHandler}
                value = {enterOvertime}
              />
               {overtimeInputHasError && (
                <span className={classes.error}>{overtimeMessageError}</span>
              )}
            </div>
          </div>
          <div className="mb-2 row">
            <button className="btn btn-primary col-6" type="submit" disabled>
              Thêm
            </button>
            <button className="btn btn-danger col-6" type="button">
              Thoát
            </button>
          </div>
        </form>
      </Container>
    </Modal>
  );
};

export default FormAdd;
