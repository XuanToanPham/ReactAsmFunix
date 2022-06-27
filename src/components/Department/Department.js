import Container from "react-bootstrap/esm/Container";
import { useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";
// import { DEPARTMENTS } from "../Data/staffs";
import DepartmentList from "./DepartmentList";
const Department = () => {
  const departments = useSelector((state) => state.department.departments);
  return (
    <Container>
      <ul className="row mb-5 mt-5">
        {departments.map((department) => (
            <DepartmentList department={department} key={department.id} />
        ))}
      </ul>
    </Container>
  );
};

export default Department;
