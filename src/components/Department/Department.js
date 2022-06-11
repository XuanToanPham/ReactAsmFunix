import Container from "react-bootstrap/esm/Container";
import { DEPARTMENTS } from "../Data/staffs";
import DepartmentList from "./DepartmentList";
const Department = () =>{
    return (
        <Container>
            <ul className="row">
                {DEPARTMENTS.map(department => (
                    <DepartmentList department={department} key={department.id}/>
                ))}
            </ul>
        </Container>
    )
}

export default Department;