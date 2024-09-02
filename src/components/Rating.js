import "../styles/Rating.scss"

function Rating(props) {
    const base = [...Array(parseInt(5)).keys()]
    const score = `${props.rating}`
    const starsOn = [...Array(parseInt(score)).keys()]

    return (
        <div className="rating">
            <ul className="rating-stars">
                {base.map(item => <li key={`rating-${item}`}><span className="star"></span></li>)}
            </ul>
            <ul className="rating-stars">
                {starsOn.map(item => <li key={`score-${item}`}><span className="star star-on"></span></li>)}
            </ul>
        </div>
    )
  }
  
export default Rating