import "./App.css";
import {
  BrowserRouter,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import Header from "./components/UI/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import Staff from "./components/Staff/Staff";
import StaffDetail from "./components/Staff/StaffDetail";
import Footer from "./components/UI/Footer";
import Payroll from "./components/Payroll/Payroll";
import Department from "./components/Department/Department";
import Breadcrum from "./components/Breadcrumb/Breadcrum";
import { useState } from "react";
import NotFoundStaff from "./components/UI/NotFoundStaff";
import ListSearch from "./components/UI/ListSearch";
function App() {
  const [infoStaff, setInfoStaff] = useState("");
  const getInfoStaff = (infoStaff) => {
    setInfoStaff(infoStaff);
  };
  return (
    <BrowserRouter>
      <Header />
      <Breadcrum infoStaff={infoStaff} />
      <Switch>
        <Route path={`/`} exact>
          <Redirect to={`/staffList`} />
        </Route>
        <Route path="/staffList" exact>
          <Staff />
        </Route>
        <Route path="/staffList/:staffId">
          <StaffDetail infoStaff={getInfoStaff} />
        </Route>

        <Route path="/notFoundStaff">
          <NotFoundStaff/>
        </Route>

        <Route path={`/payrollList`}>
          <Payroll />
        </Route>
        <Route path={`/departmentList`}>
          <Department />
        </Route>
        <Route path={`/listSearch`}>
          <ListSearch />
        </Route>
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}

export default App;