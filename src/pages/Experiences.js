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
            title: "MIT Fundamentals of Programming",
            detail: <>Undergraduate Lab Assistant<br />September 2024 - Present<br /><br />
                Help students of the course learn to correctly implement their code for their programming labs during office hours.
            </>,
            link: "https://py.mit.edu/",
            link_type: "none",
            img: require("../public/6.1010.gif"),
            img_style: "landscape"
        },
        {
            title: "Azizan Lab",
            detail: <>Undergraduate Researcher<br />Feb 2023 - May 2023; September 2023 - May 2024; September 2024 - Present<br /><br />
                I investigated the regularization and generalization properties of the mirror descent learning algorithm when it is used to train attention models.
                In the project, I set up several experiments to see what implicit bias the algorithm might have and to also see how well the resulting model generalizes on unseen data.
                To run those experiments, I build infrastructures and pipeline of model training and data generation using pluggable object-oriented and modular components to improve reusability and code robustness.
                In addition to the empirical experiments, I also deduced the theoretical proofs of the implicit regularization properties that I discovered through the experiments.
            </>,
            link: "",
            link_type: "none",
            img: require("../public/IDSS_Horizontal_FullColor.jpg"),
            img_style: "landscape"
        },
        {
            title: "Micronotes",
            detail: <>Machine Learning Intern<br />May 2023 - Aug 2023<br /><br />
                I designed and implemented machine learning models to help financial institution predict the likelihood of a customer accepting a personal loan offer in the form of a list from most likely to least likely.
                To achieve that, I cleaned and merged data from multiple files and sources and used them to train several classification decision tree models, which outputs the predicted probability of a sample customer accepting the offer.
                These probability determines the placement of the customers in the resulting list.
                I did exactly that on two different groups of data sources, with the first resulting in a model that can have 50% of accepting customers in the test set in the top 20% of the list.
                Meanwhile, due to the nature of the second data source, I simply created a test list, which the company can only test after my internship period.
                I also used PySpark and Azure Databricks to process the data faster, and I created the pipeline while emphasizing reconfigurability and reusability.
            </>,
            link: "https://micronotes.ai/",
            link_type: "website",
            img: require("../public/micronotes.jpeg"),
            img_style: "landscape"
        },
        {
            title: "Harvard-MIT Division of Health Sciences and Technology",
            detail: <>Undergraduate Researcher<br />Sep 2022 - Jan 2023<br /><br />
                To aid with data analysis on physician-scientists impact, 
                I established a database that will store all the collected data for the group.
                I designed the schemas of the tables along with their relations through primary and foreign keys, and in addition, I uploaded the data that the group collected from various physician-scientists websites using Python.
                At the end of my experience, I created the central database and a GitHub repository that houses the group's data and codebase.
            </>,
            link: "",
            link_type: "none",
            img: require("../public/HST.jpg"),
            img_style: "landscape"
        },
        {
            title: "MIT Lecture Series Committee",
            detail: <>Webmaster and Projectionist<br />Jan 2022 - Dec 2022<br /><br />As the webmaster, I continuously update the website for the organization's screening by changing the SHTML files that I access through FileZilla to inform MIT students of future LSC screenings.<br />As a projectionist, I help set up the screenings by setting up the lights and the screen. I also set up the movie by configuring the projector through my computer.</>,
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
