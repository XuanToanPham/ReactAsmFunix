import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "./components/UI/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import Staff from "./components/Staff/Staff";
import StaffDetail from "./components/Staff/StaffDetail";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path="/staffList" exact>
          <Staff />
        </Route>
        <Route path="/staffList/:staffId">
          <StaffDetail />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
