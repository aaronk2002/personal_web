import "../style/Fonts.css";

function HomeInfo() {
    return (<><div>
        <h1 className="inter">Hi, I’m Aaron Alvarado!</h1>
        <p className="inter">
            I am a Mathematics and Computer Science and Engineering Undergraduate in MIT. I am currently interested in Machine Learning and Quantitative Trading, and my goal is to make a real-world impact through technology, mainly from innovations in Computer Science and Mathematics. Check out my <a href="https://www.linkedin.com/in/aaron-alvarado-kristanto-julistiono/">LinkedIn</a>!
        </p>
        Link to <a href={require("../public/Aaron Alvarado Kristanto Julistiono Resume.pdf")} download="Aaron Alvarado Kristanto Julistiono Resume.pdf">Resume</a>
    </div></>);
}

export default HomeInfo;