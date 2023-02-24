import Style from "./card.module.css"
import { Link } from "react-router-dom";

const Card = ({ flagImage, name, continent, id }) => {
    return (
        <div className={Style.card}>
            <div className={Style.divImg}>
                <img className={Style.img} src={flagImage} alt={name}></img>
            </div>
            <div className={Style.textContainer}>
                <p className={Style.text}>Name: {name}</p>
                <p className={Style.text}>Continent: {continent}</p>
            </div>
            <div className={Style.divButton}>
                <Link to={`/countries/${id}`}>
                <button className={Style.button}>DETAILS</button>
                </Link>
            </div>
        </div>
    )
};

export default Card;