const DepartmentList = (props) =>{
    const department = props.department;
    return (
        <li className="col-4">
            <h3>{department.name} </h3>
            <p>Số lượng nhân viên : {department.numberOfStaff}</p>
        </li>
    )
}

export default DepartmentList;