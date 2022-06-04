import './App.css';
import Header from './components/UI/Header'
import "bootstrap/dist/css/bootstrap.min.css"
import Staff from './components/Staff/Staff';
import ColumnForm from './components/Staff/ColumnForm';

function App() {
  return (
    <div className="App">
      <Header/>
      <ColumnForm/>
      <Staff/>
    </div>
  );
}

export default App;
