import "../styles/fiche.scss"
import { useParams } from 'react-router-dom'
import data from '../datas/logements.json'
import Collapse from "../components/Collapse"
import Error from '../pages/Error'

function Fiche() {
    const logements = data.map(logement => logement.id)

    const {idLogement} = useParams()

    const indexLogement = logements.indexOf(`${idLogement}`)
    const titleLogement = data[indexLogement].title
    const locationLogement = data[indexLogement].location
    const tagsLogement = data[indexLogement].tags
    const descriptionLogement = data[indexLogement].description
    const equipmentsLogement = data[indexLogement].equipments
    console.log(equipmentsLogement)

    return (
        logements.includes(`${idLogement}`) ? 
            <div className="page">
                <h1 className="tt-h1">{titleLogement}</h1>
                <p className="paragraphe">{locationLogement}</p>
                <ul className="tags">
                    {tagsLogement.map((tag, index) => (
                        <li key={`tag-${index}`}>{tag}</li>
                    ))}
                </ul>
                <div className="details">
                    <Collapse title="Description" description={descriptionLogement} />
                    <Collapse title="Équipements" equipments={equipmentsLogement} />
                </div>
            </div>
            : <Error />
    )
}

export default Fiche