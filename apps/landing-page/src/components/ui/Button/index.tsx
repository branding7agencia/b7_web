import React from "react";
import { StylesButton } from "./styles";

interface ButtonProps {
    isActive?: boolean;
    text: string;
}

const Button: React.FC<ButtonProps> = ({isActive, text}) => {
    return(
        <StylesButton isActive={isActive}>
            {text}
        </StylesButton>
    )
}

export default Button