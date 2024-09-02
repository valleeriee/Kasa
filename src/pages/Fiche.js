import "../styles/fiche.scss"
import { useParams } from 'react-router-dom'
import data from '../datas/logements.json'
import Collapse from "../components/Collapse"
import Rating from "../components/Rating"
import Carrousel from "../components/Carrousel"
import Error from '../pages/Error'

function Fiche() {
    const logements = data.map(logement => logement.id)

    const {idLogement} = useParams()

    const indexLogement = logements.indexOf(`${idLogement}`)

    return (
        logements.includes(`${idLogement}`) ? 
            <div className="page">
                <Carrousel pictures={data[indexLogement].pictures} />
                <div className="infos">
                    <div className="col">
                        <h1 className="tt-h1">{data[indexLogement].title}</h1>
                        <p className="paragraphe">{data[indexLogement].location}</p>
                        <ul className="tags">
                            {data[indexLogement].tags.map((tag, index) => (
                                <li key={`tag-${index}`}>{tag}</li>
                            ))}
                        </ul>
                    </div>
                    <div className="col col-right">
                        <div className="host">
                            <p className="host-name">{data[indexLogement].host.name}</p>
                            <div className="host-photo"><img src={data[indexLogement].host.picture} alt={data[indexLogement].host.name} className="img-cover" /></div>
                        </div>
                        <Rating rating={data[indexLogement].rating} />
                    </div>
                </div>
                        
                <div className="details">
                    <Collapse title="Description" description={data[indexLogement].description} />
                    <Collapse title="Équipements" equipments={data[indexLogement].equipments} />
                </div>
            </div>
            : <Error />
    )
}

export default Fiche