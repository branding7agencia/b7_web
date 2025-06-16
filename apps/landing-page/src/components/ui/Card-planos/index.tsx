import { StyleCardPlans } from "./styles";
import Button from "../Button";
import type { CardProps } from "../../../types/Card.types";

const CardPlans: React.FC<CardProps> = ({title, description, isActive, price, items}: CardProps) => {
    return(
        <StyleCardPlans isActive={isActive}>
            <div className="head">
                <h3>{title}</h3>
                <div className="price">
                    <b>{price}</b>
                    <p>PER MONTH</p>
                </div>
            </div>
            <p>{description}</p>
            <ul>
                {items}
            </ul>
            <span>SUPPORT: EMAIL SUPPORT</span>
            <Button isActive={true} text="COMPRAR AGORA"/>
        </StyleCardPlans>
    )
}

export default CardPlans