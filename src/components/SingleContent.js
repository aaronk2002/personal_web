import "../style/Animations.css";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import React, { useEffect } from "react";

function SingleContent(props) {
    const fadeInAnimation = {
        visible: { opacity: 1, transition: { duration: 2 } },
        hidden: { opacity: 0 }
    };
    const controls = useAnimation();
    const [ref, inView] = useInView();
    useEffect(() => {
      if (inView) {
        controls.start("visible");
      } else {
        controls.start("hidden");
      }
    }, [controls, inView]);
    return (<>
        <motion.div
            ref={ref}
            animate={controls}
            initial="hidden"
            variants={fadeInAnimation}
            className="contentSplitter"
        >
            <div className="contentDesc">{props.desc}</div>
            <div className="contentImg">{props.img}</div>
        </motion.div>
    </>);
}

export default SingleContent;