import Container from "react-bootstrap/esm/Container";
import { Link, useLocation } from "react-router-dom";
const Breadcrum = (props) => {
  const location = useLocation();
  let infoStaffDetail = props.infoStaff.name;
  let content;
  if (location.pathname.includes("payrollList")) {
    content = "Bang luong";
    infoStaffDetail = null
  } else if (location.pathname.includes("staffList") && !infoStaffDetail) {
    content = "Danh sach nhan vien";
    infoStaffDetail = null
  } else if (location.pathname.includes("departmentList")) {
    content = "Phong ban";
    infoStaffDetail = null

  } else if (location.pathname.includes("staffList/") && infoStaffDetail) {
    content = infoStaffDetail;
  }
  else if (!location.pathname.includes("staffList/")){
    infoStaffDetail = null
    content = "Danh sach nhan vien";
  }
  return (
    <Container className="mt-3">
      <div>
        <h5 className="fw-normal">
          Nhân Viên / {infoStaffDetail?<Link style={{"color" : "#333", "textDecoration" : "none"}} to={`/staffList`}>Danh sách Nhân viên / </Link>: ""} <span style={{ color: "blue" }}>{content}</span>
        </h5>
      </div>
    </Container>
  );
};

export default Breadcrum;
