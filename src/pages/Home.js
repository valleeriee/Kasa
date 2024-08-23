import Banner from "../components/Banner"
import visuel from "../assets/bandeau-home.jpg"

function Home() {
    return (
        <div className="container">
            <Banner img={visuel} title="Chez vous, partout et ailleurs" />
        </div>
    )
}

export default Home