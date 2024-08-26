import { NavLink } from "react-router-dom"
import logo from "../assets/logo-kasa-footer.png"
import "../styles/Footer.scss"

function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer">
            <NavLink to="/" className="lk-menu"><img src={logo} alt="Kasa" className="logo" /></NavLink>
            <p className="copyright">© {currentYear} Kasa. All rights reserved</p>
        </footer>
    );
}
  
export default Footer;