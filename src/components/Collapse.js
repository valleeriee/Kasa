import "../styles/Collapse.scss"

function Collapse(props) {
    function showDescription(e) {
        e.currentTarget.classList.toggle('clps-open');
    }

    const title = props.title ? <h2 className="tt-h2">{props.title}</h2> : ""
    const description = props.description ? <p className="paragraphe">{props.description}</p> : ""

    return (
        <div className="collapse" onClick={showDescription}>
            {title}
            <div className="clps-txt">
                {description}
            </div>
        </div>
    );
}
  
export default Collapse;