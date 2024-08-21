function Banner(props) {
    return (
        <div className="banner">
            <img src={props.img} alt="Kasa" className="img-cover" />
            {props.children}
        </div>
    )
}

export default Banner