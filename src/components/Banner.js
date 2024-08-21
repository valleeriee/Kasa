import visuel from "../assets/bandeau-home.jpg"

function Banner({children}) {
    return (
        <div className="banner">
            <img src={visuel} alt="Kasa" className="img-cover" />
            {children}
        </div>
    )
}

export default Banner