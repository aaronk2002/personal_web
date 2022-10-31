import SingleContent from "./SingleContent";
import "../style/Images.css"

function Desc(props) {
    return (<>
        <div>
            <h1>{props.title}</h1>
            <p>{props.detail}</p>
        </div>
    </>);
}

function Img(props) {
    return (<>
        <a href={props.link} target="_blank">
            <img src={require(props.image)} className="aaron" />
        </a>
    </>)
}

function Achievements() {
    const comp_desc = [
        {
            title: "Honorable Mention, Putnam Mathematical Competition 2021",
            detail: "Received 50/120 points, ranked 57 out of 2975 people"
        },
        {
            title: "Silver Medal, International Mathematical Olympiad 2021",
            detail: "Received 21/42 points, ranked 105 out of 619 people"
        },
        {
            title: "Gold Medal, International Mathematical Olympiad 2020",
            detail: "Received 33/42 points, ranked 22 out of 616 people"
        },
        {
            title: "Silver Medal, International Mathematical Olympiad 2019",
            detail: "Received 27/42 points, ranked 101 out of 621 people"
        },
        {
            title: "Bronze Medal, Romanian Master of Mathematics 2019",
            detail: "Received 25/42 points, ranked 64 out of 135 people"
        }
    ];
    return (<>
        <SingleContent 
            desc={<Desc title={comp_desc[0].title} detail={comp_desc[0].detail} />}
            img={<a href="https://www.maa.org/sites/default/files/pdf/Putnam/2021/AnnouncementOfWinnersFall2021.docx%20%284%29.pdf" target="_blank">
                <img src={require("../public/Aaron.PNG")} className="portrait" />
            </a>} />
        <SingleContent 
            desc={<Desc title={comp_desc[1].title} detail={comp_desc[1].detail} />}
            img={<a href="https://www.imo-official.org/team_r.aspx?code=IDN&year=2021&column=total&order=desc&gender=hide" target="_blank">
                <img src={require("../public/Aaron.PNG")} className="portrait" />
            </a>} />
        <SingleContent 
            desc={<Desc title={comp_desc[2].title} detail={comp_desc[2].detail} />}
            img={<a href="https://www.imo-official.org/team_r.aspx?code=IDN&year=2020&column=total&order=desc&gender=hide" target="_blank">
                <img src={require("../public/Aaron.PNG")} className="portrait" />
            </a>} />
        <SingleContent 
            desc={<Desc title={comp_desc[3].title} detail={comp_desc[3].detail} />}
            img={<a href="https://www.imo-official.org/team_r.aspx?code=IDN&year=2019" target="_blank">
                <img src={require("../public/Aaron.PNG")} className="portrait" />
            </a>} />
        <SingleContent 
            desc={<Desc title={comp_desc[4].title} detail={comp_desc[4].detail} />}
            img={<a href="https://rmms.lbi.ro/rmm2019/index.php?id=results_math" target="_blank">
                <img src={require("../public/Aaron.PNG")} className="portrait" />
            </a>} />
    </>);
}

export default Achievements;