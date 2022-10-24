import { Link } from "react-router-dom";
import "../style/Containers.css";

function NavBar() {
    return (<>
        <span className="navFlex">
            <span className="navPages"><Link to="/" className="navLinks"><button className="navButtons">Home</button></Link></span>
            <span className="navPages"><Link to="/achievements" className="navLinks"><button className="navButtons">Achievements</button></Link></span>
            <span className="navPages"><Link to="/experiences" className="navLinks"><button className="navButtons">Experiences</button></Link></span>
            <span className="navPages"><Link to="/projects" className="navLinks"><button className="navButtons">Projects</button></Link></span>
        </span>
    </>);
}

export default NavBar;