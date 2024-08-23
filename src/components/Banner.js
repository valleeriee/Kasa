import '../styles/Banner.scss';

function Banner(props) {
    const title = props.title ? <h1 className="tt-h1">{props.title}</h1> : ""
    
    return (
        <div className="banner">
            <img src={props.img} alt="Kasa" className="img-cover" />
            {title}
        </div>
    )
}

export default Banner