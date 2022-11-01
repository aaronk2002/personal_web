import SingleContent from "../components/SingleContent";
import Desc from "../components/Desc.js";
import Img from "../components/Img.js";

function Achievements() {
    const img_style = "portrait";
    const comps = [
        {
            title: "Honorable Mention, Putnam Mathematical Competition 2021",
            detail: <><br />Received 50/120 points, ranked 57 out of 2975 people</>,
            link: "https://www.maa.org/sites/default/files/pdf/Putnam/2021/AnnouncementOfWinnersFall2021.docx%20%284%29.pdf",
            img: require("../public/Aaron.PNG")
        },
        {
            title: "Silver Medal, International Mathematical Olympiad 2021",
            detail: <><br />Received 21/42 points, ranked 105 out of 619 people</>,
            link: "https://www.imo-official.org/team_r.aspx?code=IDN&year=2021&column=total&order=desc&gender=hide",
            img: require("../public/Aaron.PNG")
        },
        {
            title: "Gold Medal, International Mathematical Olympiad 2020",
            detail: <><br />Received 33/42 points, ranked 22 out of 616 people</>,
            link: "https://www.imo-official.org/team_r.aspx?code=IDN&year=2020&column=total&order=desc&gender=hide",
            img: require("../public/Aaron.PNG")
        },
        {
            title: "Silver Medal, International Mathematical Olympiad 2019",
            detail: <><br />Received 27/42 points, ranked 101 out of 621 people</>,
            link: "https://www.imo-official.org/team_r.aspx?code=IDN&year=2019",
            img: require("../public/Aaron.PNG")
        },
        {
            title: "Bronze Medal, Romanian Master of Mathematics 2019",
            detail: <><br />Received 25/42 points, ranked 64 out of 135 people</>,
            link: "https://rmms.lbi.ro/rmm2019/index.php?id=results_math",
            img: require("../public/Aaron.PNG")
        }
    ];
    return (
        comps.map((comp) => <>
            <SingleContent
                desc={<Desc title={comp.title} detail={comp.detail} />}
                img={<Img link={comp.link} img={comp.img} img_style={img_style} link_type="website" />}
            />
        </>)
    );
}

export default Achievements;