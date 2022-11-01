import SingleContent from "../components/SingleContent";
import Desc from "../components/Desc.js";
import Img from "../components/Img.js";

function Projects() {
    const projs = [
        {
            title: "Lie Wordle",
            detail: <><br />I recreated the popular WORDLE app, with a new mode where one letter clue is false or hidden using the React.js as the front-end, node.js and express.js as back-end for making API’s, and MongoDB as the database that stores most, if not all, five-letter English words.</>,
            link: "https://lie-wordle.netlify.app/",
            link_type: "website",
            img: require("../public/Aaron.PNG"),
            img_style: "landscape"
        }
    ];
    return (
        projs.map((proj) => <>
            <SingleContent
                desc={<Desc title={proj.title} detail={proj.detail} />}
                img={<Img link={proj.link} img={proj.img} img_style={proj.img_style} link_type={proj.link_type} />}
            />
        </>)
    );
}

export default Projects;