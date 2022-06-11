import "./App.css";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import Header from "./components/UI/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import Staff from "./components/Staff/Staff";
import StaffDetail from "./components/Staff/StaffDetail";
import Footer from "./components/UI/Footer";
import Payroll from "./components/Payroll/Payroll";
import Department from "./components/Department/Department";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path={`/`} exact>
          <Redirect to={`/staffList`}/>
        </Route>
        <Route path="/staffList" exact>
          <Staff />
        </Route>
        <Route path="/staffList/:staffId">
          <StaffDetail />
        </Route>

        <Route path={`/payrollList`}>
          <Payroll/>
        </Route>
        <Route path={`/department`}>
          <Department/>
        </Route>
      </Switch>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
