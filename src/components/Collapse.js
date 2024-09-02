import "../styles/Collapse.scss"

function Collapse(props) {
    function showDescription(e) {
        e.currentTarget.classList.toggle('clps-open')
    }

    const title = props.title ? <h2 className="tt-h2">{props.title}</h2> : ""
    const description = props.description ? <p className="paragraphe">{props.description}</p> : ""

    const listeEquipements = props.equipments
    const equipments = listeEquipements ? <ul className="paragraphe">
            {listeEquipements.map((equipment, index) => (
                <li key={`eqp-${index}`}>{equipment}</li>
            ))}
        </ul> : ""

    return (
        <div className="collapse" onClick={showDescription}>
            {title}
            <div className="clps-txt">
                {description}
                {equipments}
            </div>
        </div>
    )
}
  
export default Collapse;