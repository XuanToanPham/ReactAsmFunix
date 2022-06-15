
import classes from "./Header.module.css";
import Nav from "./Nav";


const Header = (props) => {
  const getListSearch = (listSearch) =>{
    props.onSearch(listSearch);
  }
  return (
    <header className={`ps-3 pe-3 ${classes.header}`}>
      <Nav onSearch = {getListSearch}/>
    </header>
  );
};

export default Header;
