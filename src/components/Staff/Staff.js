import fontawesome from "@fortawesome/fontawesome";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import Container from "react-bootstrap/esm/Container";
import StaffList from "./StaffList";
import { STAFFS } from "../Data/staffs";
import { Fragment, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { staffsAction } from "../../redux/reducer/staffReducer";
import axios from "axios";
fontawesome.library.add(faPlus);
const Staff = (props) => {
  const staffs = useSelector((state) => state.staffs.staffs)
  const dispatch = useDispatch();
  return (
    <Fragment>
      <Container className="mt-2">
        <div className="d-flex justify-content-between">
          <h2 className="fw-bold">Danh sách nhân sự</h2>
          <button onClick={props.onShow} className="btn btn-primary">
            <FontAwesomeIcon icon="fa-solid fa-plus" />
          </button>
        </div>
        <ul className="row p-0">
          {staffs.map((staff) => (
            <StaffList
              staff={staff}
              imageStaff={staff.image}
              key={staff.id}
            />
          ))}
        </ul>
      </Container>
    </Fragment>
  );
};

export default Staff;
