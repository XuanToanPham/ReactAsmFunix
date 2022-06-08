
import classes from "./Header.module.css";
import Nav from "./Nav";


const Header = () => {
  return (
    <header className={`p-3 ${classes.header}`}>
      <Nav/>
    </header>
  );
};

export default Header;
