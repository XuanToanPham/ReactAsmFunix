import Container from "react-bootstrap/esm/Container"
import { useSelector } from "react-redux"
import PayrollList from "./PayrollList"
const Payroll = () => {
    const salarys =  useSelector((state) => state.department.salary);
    console.log(salarys);
    return(
        <Container>
            <ul className="row">
                {salarys.map(staff => (
                    <PayrollList key={staff.id} staff = {staff}/>
                ))}
            </ul>
        </Container>
    )
}

export default Payroll