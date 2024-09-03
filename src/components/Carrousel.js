import { useState } from 'react';
import "../styles/Carrousel.scss"
import arrowPrev from "../assets/slider-prev.png"
import arrowNext from "../assets/slider-next.png"

function Carrousel(props) {
    const pictures = props.pictures
    const nbPhotos = pictures.length
    const [count, setCount] = useState(0)
    const photo = pictures[count]

    const handleClick = (e) => {
        e.preventDefault()
        e.target.classList.contains("arrow-right") ? checkSlideNext() : checkSlidePrev()
    }

    const checkSlideNext = () => {
        count < nbPhotos - 1 ? setCount(x => x + 1) : setCount(x => 0)
    }

    const checkSlidePrev = () => {
        count > 0 ? setCount(x => x - 1) : setCount(x => nbPhotos - 1)
    }

    const sliderNav = nbPhotos > 1 ? (
        <>
            <img src={arrowPrev} alt="Précédent" className="arrow arrow-left" onClick={handleClick} />
            <img src={arrowNext} alt="Suivant" className="arrow arrow-right" onClick={handleClick} />
            <p className="numerotation">{count + 1}/{nbPhotos}</p>
        </>
    ) : ""

    return (
        <div className="carrousel">
            {sliderNav}
            <div className="visuel"><img src={photo} alt="" className="img-cover" /></div>
        </div>
    )
}
  
export default Carrousel