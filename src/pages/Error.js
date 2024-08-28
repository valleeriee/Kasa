import { NavLink } from 'react-router-dom'
import "../styles/error.scss"

function Error() {
    return (
        <div className="page pg-error">
            <div className="code">404</div>
            <h1 className="tt-h1">Oups! La page que vous demandez n'existe pas.</h1>
            <NavLink to="/" className="lk-back">Retourner sur la page d’accueil</NavLink>
        </div>
    )
}
 
export default Error