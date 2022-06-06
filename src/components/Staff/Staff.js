import Container from "react-bootstrap/esm/Container";
import StaffList from "./StaffList";
import { STAFFS } from "../Data/staffs";
import { Fragment, useState } from "react";
import StaffDetail from "./StaffDetail";
import ColumnForm from "./ColumnForm";
const Staff = () => {
  const [infoStaff, setInfoStaff] = useState(null);
  const [col, setCol] = useState("6");
  const clickHandler = (id) => {
    const staffInfo = STAFFS.find((staff) => staff.id === id);
    setInfoStaff(staffInfo);
  };

  const getColumn = (col) => {
    setCol(col);
  };
  const exitStaffDetail = (isExit) => {
    setInfoStaff(isExit);
  };
  return (
    <Fragment>
      <ColumnForm onClick={getColumn} />

      <Container className="mt-2">
        <p className="fs-5 fw-bold">Danh sách nhân sự</p>
        <ul className="row p-0">
          {STAFFS.map((staff) => (
            <StaffList
              col={col}
              staff={staff}
              key={staff.id}
              onClick={clickHandler}
            />
          ))}
        </ul>
        {!infoStaff && (
          <p className="fs-5 fw-bold">
            Bấm vào tên nhân viên để hiện thông tin
          </p>
        )}
      </Container>
      <Container className="mb-2">
        {infoStaff && (
          <p className="fs-5 fw-bold">
            Thông tin nhân sự
          </p>
        )}
        <div className="row p-0">
          {infoStaff && (
            <StaffDetail infoStaff={infoStaff} onClick={exitStaffDetail} />
          )}
        </div>
      </Container>
    </Fragment>
  );
};

export default Staff;
