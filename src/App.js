import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";
import Header from "./components/UI/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import Staff from "./components/Staff/Staff";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Route path="/staffList">
        <Staff />
      </Route>
    </BrowserRouter>
  );
}

export default App;
