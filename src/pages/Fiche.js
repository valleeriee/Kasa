import "../styles/fiche.scss"
import { useParams } from 'react-router-dom'
import data from '../datas/logements.json'
import Collapse from "../components/Collapse"
import Error from '../pages/Error'

function Fiche() {
    const logements = data.map(logement => logement.id)

    const {idLogement} = useParams()

    const indexLogement = logements.indexOf(`${idLogement}`)

    return (
        logements.includes(`${idLogement}`) ? 
            <div className="page">
                <h1 className="tt-h1">{data[indexLogement].title}</h1>
                <p className="paragraphe">{data[indexLogement].location}</p>
                <ul className="tags">
                    {data[indexLogement].tags.map((tag, index) => (
                        <li key={`tag-${index}`}>{tag}</li>
                    ))}
                </ul>
                <div className="details">
                    <Collapse title="Description" description={data[indexLogement].description} />
                    <Collapse title="Équipements" equipments={data[indexLogement].equipments} />
                </div>
            </div>
            : <Error />
    )
}

export default Fiche