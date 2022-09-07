function SingleContent(props) {
    return (<>
        <div className="contentSplitter">
            <div className="contentDesc">{props.desc}</div>
            <div className="contentImg">{props.img}</div>
        </div>
    </>);
}

export default SingleContent;