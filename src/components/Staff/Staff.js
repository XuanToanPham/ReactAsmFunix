import Container from "react-bootstrap/esm/Container";
import StaffList from "./StaffList";
import { STAFFS } from "../Data/staffs";
import { Fragment } from "react";
const Staff = () => {
  const clickHandler = (id)=>{
    console.log(id);
  }
  return (
    <Fragment>
      <Container className="mt-2">
        <ul className="row p-0">
          {STAFFS.map(staff => (
            <StaffList staff = {staff} key={staff.id} onClick={clickHandler}/>
          ))}
        </ul>
        <p>Bấm vào tên nhân viên để hiện thông tin</p>
      </Container>
      <Container>

      </Container>
    </Fragment>
  );
};

export default Staff;
