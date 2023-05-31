import SingleContent from "../components/SingleContent";
import Desc from "../components/Desc.js";
import Img from "../components/Img.js";
import React, { useEffect } from 'react';

function Experiences() {
    useEffect(() => {
        document.title = 'Aaron Web | Experiences';
    });
    const exps = [
        {
            title: "Azizan Lab",
            detail: <>Undergraduate Researcher<br />Feb 2023 - Present<br /><br />I investigated the generalization properties of the Stochastic Mirror Descent optimizer on l^p potentials. In the project, I set up several experiments to see what this algorithm does to the weights on a neural network, and how it increases or decreases test accuracies. I am currently not doing the project, but will continue in next Fall.</>,
            link: "",
            link_type: "none",
            img: "",
            img_style: ""
        },
        {
            title: "Harvard-MIT Division of Health Sciences and Technology",
            detail: <>Undergraduate Researcher<br />Sep 2022 - Jan 2023<br /><br />I collect and merge data from real-world datasets to quantify the role of physician-scientists and the impact of mentoring on physician-scientists. The data are stored in a MySQL database, in which I design the tables with primary and foreign keys containing information on people, projects, publications, and organizations to analyze how projects evolve and the professional relationships between scientists. I also present weekly updates and findings to research groups and supervisor for feedbacks.</>,
            link: "",
            link_type: "none",
            img: "",
            img_style: ""
        },
        {
            title: "MIT Lecture Series Committee",
            detail: <>Webmaster and Projectionist<br />Jan 2022 - Present<br /><br />As the webmaster, I continuously update the website for the organization's screening by changing the SHTML files that I access through FileZilla to inform MIT students of future LSC screenings.<br />As a projectionist, I help set up the screenings by setting up the lights and the screen. I also set up the movie by configuring the projector through my computer.</>,
            link: "http://lsc.mit.edu/",
            link_type: "website",
            img: require("../public/lsc.jpg"),
            img_style: "landscape"
        },
        {
            title: "MIT Math Department",
            detail: <>Undergraduate Researcher<br />Jun 2022 - Sep 2022<br /><br />In MIT's department of Mathematics, I reviewed books and notes about representation theory, p-adic numbers, and bruhat-tits buildings to identify relevant ideas and concepts that helped define a new formal dimension of the group representation of the p-adic number, which can give a new insight into this group representation. I then presented my findings to my supervisor.</>,
            link: require("../public/Final Write-Up V5.pdf"),
            link_type: "file",
            img: require("../public/p_adic.png"),
            img_style: "portrait"
        },
        {
            title: "MIT New Vassar Student Government",
            detail: <>Webmaster<br />Oct 2021 - Sep 2022<br /><br />I created the website for the New Vassar dorm in MIT using React.js framework to show some information about the dorm and a calendar of events in the dorm.</>,
            link: "https://newvassar.mit.edu/",
            link_type: "website",
            img: require("../public/nv.png"),
            img_style: "landscape"
        },
        {
            title: "MIT Media Lab",
            detail: <>Undergraduate Researcher<br />Jan 2022 - May 2022<br /><br />I surveyed and summarized over 20 research papers on improving the graph neural network framework to reduce the effects of the long-range dependency problem, such as over squashing and vanishing gradients. I also presented the findings and recommendations to supervisor.</>,
            link: "",
            link_type: "none",
            img: require("../public/media_lab.png"),
            img_style: "landscape"
        },
    ];
    return (
        exps.map((exp) => <>
            <SingleContent
                desc={<Desc title={exp.title} detail={exp.detail} />}
                img={<Img link={exp.link} img={exp.img} img_style={exp.img_style} link_type={exp.link_type} />}
            />
        </>)
    );
}

export default Experiences;