import Container from "react-bootstrap/Container";
import classes from "./Header.module.css";
import fontawesome from '@fortawesome/fontawesome'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faUser} from "@fortawesome/free-solid-svg-icons"

fontawesome.library.add(faUser);
const Header = () => {
  return (  
    <header className={`p-3 ${classes.header}`}>
      <Container>
       
        <span className={classes["header-content"]}>
          { <FontAwesomeIcon icon="fa-solid fa-user" />} Ứng dụng quản lý nhân sự
        </span>
      </Container>
    </header>
  );
};

export default Header;
