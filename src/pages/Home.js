import "../styles/home.scss"
import Banner from "../components/Banner"
import Card from "../components/Card"
import visuel from "../assets/bandeau-home.jpg"
import data from '../datas/logements.json'

function Home() {
    return (
        <div className="page">
            <Banner img={visuel} title="Chez vous, partout et ailleurs" />
            <div className="gallery">
                {data.map((logement) => (
                    <Card key={logement.id} id={logement.id} title={logement.title} cover={logement.cover} />
                ))}
            </div>
        </div>
    )
}

export default Home