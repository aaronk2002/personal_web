import React, { useState } from 'react';
import { Link } from "react-router-dom";
import "../style/Containers.css";
import useScreenOrientation from 'react-hook-screen-orientation';
import "../style/Images.css";

function NavBar() {
    const [visible, setVisible] = useState(false);
    const [height, setHeight] = useState("small");
    const toggle = () => {
        setVisible(!visible);
    };
    const [isPortrait, setIsPortrait] = useState(useScreenOrientation() == "portrait-primary");
    const changePortrait = () => {setIsPortrait(!isPortrait);};
    window.addEventListener('orientationchange', changePortrait);
    return (<>
        <div className={visible && isPortrait ? "big" : "small"}>
            <span className="navFlex">
                { isPortrait ?
                    <><span className="navPages"><div className="navLinks" onClick={toggle}><button className="navButtons"><div className="menu"></div>
                    <div className="menu"></div>
                    <div className="menu"></div></button></div></span></>
                : <></>}
                {
                    visible || !isPortrait ?
                    <>
                        <span className="navPages"><Link to="/" className="navLinks" onClick={toggle}><button className="navButtons">Home</button></Link></span>
                        <span className="navPages"><Link to="/achievements" className="navLinks" onClick={toggle}><button className="navButtons">Achievements</button></Link></span>
                        <span className="navPages"><Link to="/experiences" className="navLinks" onClick={toggle}><button className="navButtons">Experiences</button></Link></span>
                        <span className="navPages"><Link to="/projects" className="navLinks" onClick={toggle}><button className="navButtons">Projects</button></Link></span>
                    </>:
                    <></>
                }
            </span>
        </div>
    </>);
}

export default NavBar;