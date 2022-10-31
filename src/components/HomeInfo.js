import "../style/Fonts.css";

function HomeInfo() {
    return (<><div>
        <h1 className="inter">Hi, I’m Aaron Alvarado!</h1>
        <p className="inter">
            I am a Computer Science and Engineering Undergraduate in MIT who plans on taking Mathematics as a second major. I am currently interested in Software Engineering and Quantitative Trading, and my goal is to make a real-world impact through technology, mainly from innovations in Computer Science and Mathematics. Check out my <a href="https://www.linkedin.com/in/aaron-alvarado-kristanto-julistiono/">LinkedIn</a>!
        </p>
        Link to <a href={require("../public/Resume.pdf")} download>Resume</a>
    </div></>);
}

export default HomeInfo;