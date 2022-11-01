import "../style/Fonts.css";
import "../style/Containers.css";

function Desc(props) {
    return (<>
        <div className="inter">
            <h1 className="noMargin">{props.title}</h1>
            <p className="noMargin">{props.detail}</p>
        </div>
    </>);
}

export default Desc;