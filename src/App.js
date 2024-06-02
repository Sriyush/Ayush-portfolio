// import './style.css';
// import 'bootstrap/dist/css/bootstrap.min.css';  
//check
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
import Project from "./components/Pages/Projects";
import Footer from "./components/Footer";
import ScrollToTop from "./components/Scrolltotop";
function App() {
  return (
    <Router>
     <div className="App">
     <NavBar />
      <Sidebar/>
      {/* <ScrollToTop/> */}
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/projects" element={<Project/>} />
      </Routes>
      <Footer/>
      </div>
    </Router>
  );
}

export default App;
