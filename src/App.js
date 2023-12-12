// import './style.css';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate
} from "react-router-dom";
import NavBar from './components/Navbar';
import Home from "./components/Pages/Home";
import Sidebar from "./components/Sidebar";
import About from "./components/Pages/About";
function App() {
  return (
    <Router>
      <NavBar />
      <Sidebar/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
      </Routes>
    </Router>
  );
}

export default App;
