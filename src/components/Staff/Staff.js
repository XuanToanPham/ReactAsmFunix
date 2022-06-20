import Container from "react-bootstrap/esm/Container";
import StaffList from "./StaffList";
import { STAFFS } from "../Data/staffs";
import { Fragment, useState } from "react";
const Staff = () => {
  const [infoStaff, setInfoStaff] = useState(null);
  const clickHandler = (id) => {
    const staffInfo = STAFFS.find((staff) => staff.id === id);
    setInfoStaff(staffInfo);

  };


  return (
    <Fragment>
    
      <Container className="mt-2">
        <p className="fs-5 fw-bold">Danh sách nhân sự</p>
        <ul className="row p-0">
          {STAFFS.map((staff) => (
            <StaffList
              staff={staff}
              imageStaff = {staff.image}
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
    </Fragment>
  );
};

export default Staff;
