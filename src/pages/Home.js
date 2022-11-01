import SingleContent from "../components/SingleContent.js";
import HomeInfo from "../components/HomeInfo.js";
import HomeImg from "../components/HomeImg.js";

function Home() {
    return (<>
        <SingleContent desc={<HomeInfo />} img={<HomeImg />} />
    </>);
}

export default Home;