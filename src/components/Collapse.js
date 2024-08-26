import "../styles/Collapse.scss"

function Collapse(props) {
    const title = props.title ? <h2 className="tt-h2">{props.title}</h2> : ""

    return (
        <div className="collapse">
            {title}
        </div>
    );
}
  
export default Collapse;