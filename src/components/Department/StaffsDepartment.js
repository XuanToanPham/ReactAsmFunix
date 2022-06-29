import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import StaffList from "../Staff/StaffList";
import { departmentAction } from "../../redux/reducer/departmentReducers";
import axios from "axios";
import { useEffect } from "react";
import Container from "react-bootstrap/esm/Container";

const StaffDepartment = () => {
  const dispatch = useDispatch();
  const staffDepartment = useSelector(
    (state) => state.department.staffDepartment
  );
  const params = useParams();
  const fetchStaffDepartment = async () => {
    const response = await axios
      .get(`https://rjs101xbackend.herokuapp.com/departments/${params.depId}`)
      .catch((err) => {
        console.log("Error", err);
      });
    dispatch(departmentAction.getStaffDepartment(response.data));
  };
  useEffect(() => {
    fetchStaffDepartment();
  }, [params.depId]);
  console.log(staffDepartment);
  let content;
  if (staffDepartment.length < 1) {
    content = <div>Loading</div>;
  } else {
    content = (
      <ul className="row p-0">
        {staffDepartment.map((staff) => (
          <StaffList staff={staff} imageStaff={staff.image} key={staff.id} />
        ))}
      </ul>
    );
  }
  return(
    <Container className="pt-5 pb-5">
      {content}
    </Container>
  ) 
};

export default StaffDepartment;
