import Container from "react-bootstrap/Container";
import classes from "./Header.module.css";
const Header = () => {
  return (
    <header className={`p-3 ${classes.header}`}>
      <Container >
        <span className={classes["header-content"]}>Ứng dụng quản lý nhân sự</span>
      </Container>
    </header>
  );
};

export default Header;
