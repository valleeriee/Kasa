import { NavLink } from 'react-router-dom'
import logo from "../assets/logo-kasa.png"
import Nav from "./Nav"

function Header() {
    return (
        <header className="header">
            <div className="container">
                <NavLink to="/" className="lk-menu"><img src={logo} alt="Kasa" className="logo" /></NavLink>
                <Nav />
            </div>
        </header>
    );
}
  
export default Header;