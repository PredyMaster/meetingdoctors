import style from "../assets/css/getRicks.module.css";

const Card = ({image, name}) => {

    console.log(image)

    return (
        <div className={style.card}>
            <img className={style.imageRick} src={image} alt={name} />
            <p className={style.description}>Dr. {name}</p>
        </div>
        
    )

}

export default Card;