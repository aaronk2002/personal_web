import { BrowserRouter as Router, Route} from "react-router-dom";
import { Routes } from "react-router-dom";
import Home from "./components/Home.js";
import Achievements from "./components/Achievements.js";
import Experiences from "./components/Experiences.js";
import Projects from "./components/Projects.js";
import NavBar from "./components/NavBar.js";
import "./style/Containers.css";

function App() {
  return (<>
    <div className="navigationBar"><NavBar /></div>
    <div className="contentRows">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/achievements" element={<Achievements />} />
          <Route path="/experiences" element={<Experiences />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </Router>
    </div>
  </>);
}

export default App;