import {
  BrowserRouter as Router,
  Routes,
  Route,
  } from "react-router-dom";
import LoginPage from './components/LoginPage/loginPage'
import MainPage from "./components/MainPage";
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
          <Routes>
            <Route path="/" element={ <MainPage/> } />
            <Route path="/Account/:id" element={ <LoginPage/> } />
          </Routes>
      </Router>
            
    </div>
  );
}

export default App;
