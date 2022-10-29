import "../style/Images.css";

function HomeImg() {
    return (<><div className="homeImgContainer">
        <img src={require("../public/Rings.png")} className="ring" />
        <img src={require("../public/Aaron.PNG")} className="aaron" />
    </div></>);
}

export default HomeImg;