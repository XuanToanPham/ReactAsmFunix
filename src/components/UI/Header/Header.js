
import classes from "./Header.module.css";
import Nav from "./Nav";


const Header = (props) => {
  return (
    <header className={`ps-3 pe-3 ${classes.header}`}>
      <Nav />
    </header>
  );
};

export default Header;
