import Container from "react-bootstrap/esm/Container";
import fontawesome from "@fortawesome/fontawesome";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";
fontawesome.library.add(faArrowRightFromBracket);
const NotFoundStaff = () => {
  return (
    <Container className="mt-5 mb-5 pb-5 pt-5 d-flex justify-content-between ">
     
      <h1>Không có kết quả tìm kiếm phù hợp</h1>
      <NavLink
        className=""
        style={{ color: "#EF3A3A" }}
        to="/staffList"
      >
        <FontAwesomeIcon icon="fa-solid fa-arrow-right-from-bracket" />
      </NavLink>
    </Container>
  );
};

export default NotFoundStaff;
