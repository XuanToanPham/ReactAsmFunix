import Container from "react-bootstrap/esm/Container"
import { STAFFS } from "../Data/staffs"
import PayrollList from "./PayrollList"
const Payroll = () => {
    return(
        <Container>
            <ul className="row">
                {STAFFS.map(staff => (
                    <PayrollList key={staff.id} staff = {staff}/>
                ))}
            </ul>
        </Container>
    )
}

export default Payroll