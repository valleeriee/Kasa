import { NavLink } from 'react-router-dom'

function Nav() {
    return (
        <nav className="menu">
            <NavLink to="/" className="lk-menu">Accueil</NavLink>
            <NavLink to="/apropos" className="lk-menu">A Propos</NavLink>
        </nav>
    );
}
  
export default Nav;