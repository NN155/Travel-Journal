function Card(props) {
    return (
        <div className="card">
            <img src={props.img} alt="Picture" className="card--img"/>
            <div className="card--info">
                <p><span>{props.contry}</span><a href="#">View on Google Maps</a></p>
                <p className="card-name">{props.name}</p>
                <p className="card-date">{props.date}</p>
                <p>{props.description}</p>
            </div>

        </div>
    )
}

export default Card