import SingleContent from "../components/SingleContent.js";
import HomeInfo from "../components/HomeInfo.js";
import HomeImg from "../components/HomeImg.js";
import React, { useEffect } from 'react';

function Home() {
    useEffect(() => {
        document.title = 'Aaron Web | Home';
    });
    return (<>
        <SingleContent desc={<HomeInfo />} img={<HomeImg />} />
    </>);
}

export default Home;