import { BrowserRouter as Router, Route} from "react-router-dom";
import { Routes } from "react-router-dom";
import Home from "./pages/Home.js";
import Achievements from "./pages/Achievements.js";
import Experiences from "./pages/Experiences.js";
import Projects from "./pages/Projects.js";
import NavBar from "./components/NavBar.js";
import "./style/Containers.css";

function App() {
  return (<>
    <Router>
      <div className="navigationBar"><NavBar /></div>
      <div className="contentRows">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/achievements" element={<Achievements />} />
            <Route path="/experiences" element={<Experiences />} />
            <Route path="/projects" element={<Projects />} />
          </Routes>
      </div>
    </Router>
  </>);
}

export default App;