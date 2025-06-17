import { StyleCardFeedback } from "./styles";
import { CardProps } from "../../../types/Card.types";
import estrela from "../../../assets/images/star.png"

const CardFeedback: React.FC<CardProps> = ({title, description, price, image, text}) =>{
    return(
        <StyleCardFeedback>
            <div className="head">
                <div className="profile">
                    <div className="img">
                        <img src={image} alt="foto de perfil" />
                    </div>
                    <div className="profile-id">
                        <h3>{title}</h3>
                        <span>{description}</span>
                    </div>
                </div>
                <div className="assessment">
                    <img src={estrela} alt="estrela" />
                    <span>{price}</span>
                </div>
            </div>
            <p>{text}</p>
        </StyleCardFeedback>
    )
}

export default CardFeedback