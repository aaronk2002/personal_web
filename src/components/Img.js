import "../style/Images.css";

function Img(props) {
    return (<>
        <a href={props.link} target="_blank">
            <img src={props.img} className="portrait" />
        </a>
    </>)
}

export default Img;