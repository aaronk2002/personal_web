import "../style/Images.css";

function Img(props) {
    return (<>
        {
            props.link_type == "website" ?
            <a href={props.link} target="_blank">
                <img src={props.img} className={props.img_style} />
            </a> : ( props.link_type == "file" ?
            <a href={props.link} download>
                <img src={props.img} className={props.img_style} />
            </a> :
            <img src={props.img} className={props.img_style} />
            )
        }
    </>)
}

export default Img;