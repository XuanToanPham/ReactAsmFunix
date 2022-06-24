import fontawesome from "@fortawesome/fontawesome";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import Container from "react-bootstrap/esm/Container";
import StaffList from "./StaffList";
import { STAFFS } from "../Data/staffs";
import { Fragment, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
fontawesome.library.add(faPlus);
const Staff = (props) => {
  const dispatch = useDispatch();
  const listStaff = useSelector((state) => state.addNewStaff.newStaff);
  const [infoStaff, setInfoStaff] = useState(null);
  const clickHandler = (id) => {
    const staffInfo = STAFFS.find((staff) => staff.id === id);
    setInfoStaff(staffInfo);
  };

  return (
    <Fragment>
      <Container className="mt-2">
        <div className="d-flex justify-content-between">
          <h2 className="fw-bold">Danh sách nhân sự</h2>
          <button onClick={props.onShow} className="btn btn-primary"><FontAwesomeIcon icon="fa-solid fa-plus" /></button>
        </div>
        <ul className="row p-0">
          {listStaff.map((staff) => (
            <StaffList
              staff={staff}
              imageStaff={staff.image}
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
