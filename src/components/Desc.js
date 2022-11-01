import "../style/Fonts.css";

function Desc(props) {
    return (<>
        <div className="inter">
            <h1>{props.title}</h1>
            <p>{props.detail}</p>
        </div>
    </>);
}

export default Desc;