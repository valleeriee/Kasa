import "../styles/apropos.scss"
import Banner from "../components/Banner"
import Collapse from "../components/Collapse"
import visuel from "../assets/bandeau-about.jpg"

function Apropos() {
    return (
        <div className="page pg-about">
            <Banner img={visuel} />
            <div className="about-list">
                <Collapse title="Fiabilité" />
                <Collapse title="Respect" />
                <Collapse title="Service" />
                <Collapse title="Sécurité" />
            </div>
        </div>
    )
}

export default Apropos