import Banner from "../components/Banner"
import visuel from "../assets/bandeau-home.jpg"

function Home() {
    return (
        <div className="container">
            <Banner img={visuel}>
                <h1 className="tt-h1">Chez vous, partout et ailleurs</h1>
            </Banner>
        </div>
    )
}

export default Home