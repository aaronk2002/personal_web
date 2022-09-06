import { BrowserRouter as Router, Route} from "react-router-dom";
import { Routes } from "react-router-dom";
import Home from "./components/Home.js";
import Achievements from "./components/Achievements.js";
import Experiences from "./components/Experiences.js";
import Projects from "./components/Projects.js";
import NavBar from "./components/NavBar.js";

function App() {
  return (<>
    <div><NavBar /></div>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/achievements" element={<Achievements />} />
        <Route path="/experiences" element={<Experiences />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </Router>
  </>);
}

export default App;