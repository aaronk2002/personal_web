import SingleContent from "./SingleContent.js";
import HomeInfo from "./HomeInfo.js";
import HomeImg from "./HomeImg.js";

function Home() {
    return (<>
        <SingleContent desc={<HomeInfo />} img={<HomeImg />} />
    </>);
}

export default Home;