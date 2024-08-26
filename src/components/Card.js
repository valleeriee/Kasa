import "../styles/Card.scss"

function Card(props) {
    return (
        <div className="card">
            <h2 className="tt-h2">{props.title}</h2>
            <div className="visuel"><img src={props.cover} alt={props.title} className="img-cover" /></div>
        </div>
    );
}
  
export default Card;