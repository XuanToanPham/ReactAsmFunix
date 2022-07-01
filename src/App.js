import "./App.css";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import Header from "./components/UI/Header/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import Staff from "./components/Staff/Staff";
import StaffDetail from "./components/Staff/StaffDetail";
import Footer from "./components/UI/Footer/Footer";
import Payroll from "./components/Payroll/Payroll";
import Department from "./components/Department/Department";
import Breadcrum from "./components/Breadcrumb/Breadcrum";
import { useState, useEffect } from "react";
import NotFoundStaff from "./components/UI/Search/NotFoundStaff";
import ListSearch from "./components/UI/Search/ListSearch";
import FormAdd from "./components/UI/Form/FormAdd";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { staffsAction } from "./redux/reducer/staffReducer";
import { departmentAction } from "./redux/reducer/departmentReducers";
import { onCheckAddAction } from "./redux/reducer/staffReducer";
import StaffDepartment from "./components/Department/StaffsDepartment";
import FormEdit from "./components/UI/Form/FormEdit";
import NotifyDelete from "./components/UI/Notify/NotifyDelete";
function App() {
  let checkAddStaff = false;
  const checkAdd = useSelector((state) => state.onCheckAdd.checkAdd);
  const checkFormEdit = useSelector((state) => state.formEdit.checkShowFormEdit);
  const checkNotify = useSelector((state) => state.notify.checkShowModalNotify);
  const chekStaffDelete = useSelector((state) => state.notify.checkShowModalNotify);
  checkAddStaff = checkAdd;

  const dispatch = useDispatch();
  const [infoStaff, setInfoStaff] = useState("");
  const getInfoStaff = (infoStaff) => {
    setInfoStaff(infoStaff);
  };
  const [showModal, setShowModal] = useState(false);
  const showModalFormAdd = () => {
    setShowModal(true);
  };

  const hideModalFormAdd = () => {
    setShowModal(false);
  };
  const fetchStaffs = async () => {
    const response = await axios
      .get("https://rjs101xbackend.herokuapp.com/")
      .catch((err) => {
        console.log("Error", err);
      });
    dispatch(staffsAction.setStaff(response.data));
  };
  const fetchDepartment = async () => {
    const response = await axios
      .get("https://rjs101xbackend.herokuapp.com/departments")
      .catch((err) => {
        console.log("Error", err);
      });
    dispatch(departmentAction.setDepartment(response.data));
  };
  const fetchSalary = async () => {
    const response = await axios
      .get("https://rjs101xbackend.herokuapp.com/staffsSalary")
      .catch((err) => {
        console.log("Error", err);
      });
    dispatch(departmentAction.getSalary(response.data));
  };
  useEffect(() => {
    fetchStaffs();
    fetchSalary();
    fetchDepartment();
    dispatch(onCheckAddAction.susccessAdd(false));
  }, [checkAddStaff, dispatch, chekStaffDelete]);
  return (
    <BrowserRouter>
      {checkNotify && <NotifyDelete/>}
      
      {showModal && <FormAdd onClose={hideModalFormAdd} />}
      {checkFormEdit && <FormEdit/>}
      <Header />
      <Breadcrum infoStaff={infoStaff} />
      <Switch>
        <Route path={`/`} exact>
          <Redirect to={`/staffList`} />
        </Route>
        <Route path="/staffList" exact>
          <Staff onShow={showModalFormAdd} />
        </Route>
        <Route path="/staffList/:staffId">
          <StaffDetail infoStaff={getInfoStaff} />
        </Route>

        <Route path="/notFoundStaff">
          <NotFoundStaff />
        </Route>

        <Route path={`/payrollList`}>
          <Payroll />
        </Route>
        <Route path={`/departmentList`} exact>
          <Department />
        </Route>
        <Route path={`/departmentList/:depId`}>
          <StaffDepartment />
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
