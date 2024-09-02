import { Link } from 'react-router-dom'
import "../styles/Card.scss"

function Card(props) {
    return (
        <Link to={`/fiche/${props.id}`} className="card">
            <h2 className="tt-h2">{props.title}</h2>
            <div className="visuel"><img src={props.cover} alt={props.title} className="img-cover" /></div>
        </Link>
    );
}
  
export default Card