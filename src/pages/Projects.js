import SingleContent from "../components/SingleContent";
import Desc from "../components/Desc.js";
import Img from "../components/Img.js";
import React, { useEffect } from 'react';

function Projects() {
    useEffect(() => {
        document.title = 'Aaron Web | Projects';
    });
    const projs = [
        {
            title: "Improving Accuracy and Mitigating Bias and Uncertainty of Vision System Competition",
            detail: <><br />
                This project was a class project for the Intro to Deep Learning class at MIT. I also turned it in as an entry to a class competition and got third place. Class website can be found here: http://introtodeeplearning.com/
                <br /><br />
                The aim of the project was to create a facial detection deep learning model that was less biased and less uncertain about its predictions. To that end, I employed the following three techniques:
                <br /><br />
                - Weight the probability distribution of the training samples during training, allowing biased samples to be sampled less frequently, and letting the architecture learn under-represented features better
                <br />
                - Used dropout on the convolution layers of the system, which increases regularity by simulating the effect of ensembling multiple copies of the model while saving computation cost
                <br />
                - Stop training the system when the validation accuracy is above a threshold to improve test accuracy
            </>,
            link: "",
            link_type: "",
            img: "",
            img_style: ""
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