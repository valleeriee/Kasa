import Banner from "../components/Banner"
import visuel from "../assets/bandeau-about.jpg"

function Apropos() {
    return (
        <div className="page pg-about">
            <Banner img={visuel} />
            <h1>A propos</h1>
        </div>
    )
}

export default Apropos