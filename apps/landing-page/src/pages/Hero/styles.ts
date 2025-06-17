import styled, {keyframes} from "styled-components";
import { theme } from "../../styles/theme";
import bg from "../../assets/images/background-hero.png"

const slideInFromLeft = keyframes`
    from {
        opacity: 0;
        transform: translateX(-100%);
    }
    to {
        opacity: 1;
        transform: translateX(0);
    }
`;
const slideInFromRigth = keyframes`
    from {
        opacity: 0;
        transform: translateX(100%);
    }
    to{
        opacity: 1;
        transform: translateX(0);
    }
`

export const StyleHero = styled.div`
    display: flex;
    flex-direction: column;
    text-align: center;
    justify-content: center;
    gap: 32px;
    padding: 56px;
    height: 100vh;
    
    background-image: url(${bg});
    background-repeat: no-repeat;
    /* background-position: center; */
    background-size: cover;

    .title, .analisis, .buttons {
        opacity: 0;
    }

    .title{
        margin-bottom: 8px;
        animation: ${slideInFromLeft} 0.8s ease-out forwards;
        h1{
            font-size: 48px;
        }
        p{
            font-size: 32px;
            font-family: ${theme.fonts.paragrafos};
        }
    }
    .analisis{
        flex-direction: column;
        gap: 32px;
        animation: ${slideInFromRigth} 0.8s ease-out forwards;
        .metrics{
            h3{
                font-size: 40px;
            }
            p{
                font-family: ${theme.fonts.paragrafos};
                font-size: 24px;
            }
        }
    }
    .buttons{
        margin-top: 8px;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 32px;
        animation: ${slideInFromRigth} 0.8s ease-out forwards;
    }

        @media (min-width: 768px) {
            text-align: start;
            background-position: center center;

        .title{
            margin-bottom: 0;
            h1{
                font-size: 96px;
            }
        }

        .analisis{
            display: flex;
            flex-direction: row;
            .metrics{
                h3{
                    font-size: 56px;
                }
            }
        }

        .buttons{
            flex-direction: row;
            margin-top: 0;
        }
    }
`