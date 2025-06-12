import styled from "styled-components";
import { theme } from "../../../styles/theme";

interface ContainerProps {
    hasBackground?: boolean;
}

const Container = styled.div<ContainerProps>`
    height: 100vh;
    width: 100vw;
    padding: 30%;
    background-color: ${props => 
        props.hasBackground ? theme.colors.fundo : theme.colors.fundo2
    };

    @media (max-width:768px){
        padding: 10%;
    }
`

export default Container