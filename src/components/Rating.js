import "../styles/Rating.scss"

function Rating(props) {
    const score = props.rating
    const stars = [...Array(5).keys()]

    function buildStar(item) {
        const isOn = item + 1 > score
        const className = "star" + (isOn ? "" : " star-on")
        return <li key={`on-${item}`}><span className={className}></span></li>
    }

    return (
        <ul className="rating">
            {stars.map(buildStar)}
        </ul>
    )
  }
  
export default Rating