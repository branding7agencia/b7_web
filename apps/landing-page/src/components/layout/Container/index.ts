import styled from "styled-components";
import { theme } from "../../../styles/theme";

interface ContainerProps {
    hasBackground?: boolean;
}

const Container = styled.div<ContainerProps>`
    height: 100vh;
    padding:24px; 
    
    /*Selecionando o filho direto e aplicando estilos base*/
    & > :first-child {
        background-color: ${props => 
            props.hasBackground ? theme.colors.fundo : theme.colors.fundo2
        };
        height: 100%;
        border-radius: 24px;
    }

    @media (min-width: 768px){
        padding:56px; 
    }
`

export default Container