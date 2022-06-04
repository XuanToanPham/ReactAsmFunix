import Container from "react-bootstrap/esm/Container";
import StaffList from "./StaffList";
import { STAFFS } from "../Data/staffs";
import { Fragment, useState } from "react";
import StaffDetail from "./StaffDetail";
const Staff = () => {
  const [infoStaff, setInfoStaff] = useState(null);
  const clickHandler = (id) => {
    const staffInfo = STAFFS.find(staff => staff.id === id);
    setInfoStaff(staffInfo);
  }
  console.log(infoStaff)
  return (
    <Fragment>
      <Container className="mt-2">
        <ul className="row p-0">
          {STAFFS.map((staff) => (
            <StaffList staff={staff} key={staff.id} onClick={clickHandler} />
          ))}
        </ul>
        {!infoStaff && <p>Bấm vào tên nhân viên để hiện thông tin</p>}
      </Container>
      <Container>
        <div className="row p-0">
          {infoStaff && <StaffDetail infoStaff={infoStaff} />}
        </div>
      </Container>
    </Fragment>
  );
};

export default Staff;
