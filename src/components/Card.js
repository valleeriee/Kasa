import { NavLink } from 'react-router-dom'
import "../styles/Card.scss"

function Card(props) {
    return (
        <NavLink to="/fiche" className="card">
            <h2 className="tt-h2">{props.title}</h2>
            <div className="visuel"><img src={props.cover} alt={props.title} className="img-cover" /></div>
        </NavLink>
    );
}
  
export default Card;