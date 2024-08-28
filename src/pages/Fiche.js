import { useParams } from 'react-router-dom'
import data from '../datas/logements.json'
import Error from '../pages/Error'

function Fiche() {
    const logements = data.map(logement => logement.id);
    
    const {idLogement} = useParams()

    return (
        logements.includes(`${idLogement}`) ? 
            <div className="page">
                <h1>Fiche {idLogement}</h1>
            </div>
            : <Error />
    )
}

export default Fiche