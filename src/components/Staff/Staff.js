import Container from "react-bootstrap/esm/Container";
import StaffList from "./StaffList";
import {STAFFS} from "../Data/staffs";
const Staff = ()=>{
    return (
        <Container className="mt-2">
            <StaffList staffs={STAFFS}/>
            <p>Bấm vào tên nhân viên để hiện thông tin</p>
        </Container>
    )
}

export default Staff;