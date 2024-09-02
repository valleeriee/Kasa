import { useState } from 'react';
import "../styles/Carrousel.scss"
import arrowPrev from "../assets/slider-prev.png"
import arrowNext from "../assets/slider-next.png"

function Carrousel(props) {
    const pictures = props.pictures

    //const [count, setCount] = useState(0)
    const [style, setStyle] = useState("transform: translateX(0)")
    const [xPos, setXpos] = useState(0)

    const handleClick = (e) => {
        e.preventDefault()
        e.target.classList.contains("arrow-right") ? setXpos(x => x + 100) : setXpos(x => x - 100)
        setStyle({transform: `translateX(${xPos}%)`})
        console.log(style)
    }

    return (
        <div className="carrousel">
            <img src={arrowPrev} alt="Précédent" className="arrow arrow-left" onClick={handleClick} />
            <div className="slides" style={{style}}>
                {pictures.map((photo, index) => (
                    <div className="visuel" key={`slide-${index}`}>
                        <img src={photo} alt="" className="img-cover" />
                    </div>
                ))}
            </div>
            <img src={arrowNext} alt="Suivant" className="arrow arrow-right" onClick={handleClick} />
        </div>
    )
}
  
export default Carrousel