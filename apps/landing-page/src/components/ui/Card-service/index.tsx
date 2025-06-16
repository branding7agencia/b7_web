import { StyleCardService } from "./styles";
import seta from "../../../assets/images/seta-direita.png"
import { CardProps } from "../../../types/Card.types";

const CardService: React.FC<CardProps> = ({image, title, description}: CardProps) => {
    return (
        <StyleCardService>
            <div className="images">
                <img className="service" src={image} alt="serviços b7" />
                <a className="link">
                    <img className="ui-link" src={seta} alt="" />
                </a>
            </div>
            <div className="text">
                <h3>{title}</h3>
                <p>{description}</p>
            </div>
        </StyleCardService>
    )
}

export default CardService