import React from "react";
import { StylesButton } from "./styles";
import { CardProps } from "../../../types/Card.types";

const Button: React.FC<CardProps> = ({isActive, text}: CardProps) => {
    return(
        <StylesButton isActive={isActive}>
            {text}
        </StylesButton>
    )
}

export default Button