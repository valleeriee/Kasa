import "../styles/Rating.scss"

function Rating(props) {
    const score = props.rating
    const starsOn = [...Array(parseInt(score)).keys()]
    const diff = 5 - score
    const starsOff = [...Array(diff).keys()]

    return (
        <ul className="rating">
            {starsOn.map(item => <li key={`on-${item}`}><span className="star star-on"></span></li>)}
            {starsOff.map(item => <li key={`off-${item}`}><span className="star"></span></li>)}
        </ul>
    )
  }
  
export default Rating