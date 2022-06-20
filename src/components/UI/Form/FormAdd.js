import Modal from "../Modal/Modal";
import Container from "react-bootstrap/esm/Container";
const FormAdd = () => {
  const nameInputChangeHandler = (event) => {
    console.log(event.target.value);
  };
  return (
    <Modal>
      <Container>
        <form>
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
                onChange={nameInputChangeHandler}
              />
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
              />
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
              />
            </div>
          </div>
          <div className="mb-2 row">
            <label className="col-3" htmlFor="">
              Phòng ban
            </label>
            <div className="col-9">
              <select className="form-select">
                <option>Sale</option>
                <option>HR</option>
                <option>Marketing</option>
                <option>IT</option>
                <option>Finance</option>
              </select>
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
              />
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
              />
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
                min={`0`}
              />
            </div>
          </div>
          <div className="mb-2 row">
            <button className="btn btn-primary col-6" type="submit">
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
