
import { useLocation} from "react-router-dom";
import classes from "./Header.module.css";
import Nav from "./Nav";


const Header = () => {
  const location = useLocation();

  console.log(location);
  return (
    <header className={`p-3 ${classes.header}`}>
      <Nav/>
    </header>
  );
};

export default Header;
