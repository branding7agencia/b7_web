import styled from "styled-components";
import { theme } from "../../../styles/theme";

export const StyleCardFeedback = styled.div`
    width: 392px;
    border: solid 1px ${theme.colors.roxo2};
    background-color: ${theme.colors.fundo2};
    border-radius: 16px;
    padding: 24px;
    display: flex;
    flex-direction: column;
    gap: 16px;

    .head{
        display: flex;
        justify-content: space-between;

        .profile{
            display: flex; 
            align-items: center;
            gap: 8px;
            .img{
                img{
                    border-radius: 50%;
                    width: 56px;
                    height: 56px;
                    object-fit: cover;
                }
            }
            .profile-id{
                h3{
                    font-size: 18px;
                    font-weight: 700;
                }
                span{
                    color: ${theme.colors.roxo};
                }
            }
        }

        .assessment{
            display: flex;
            align-items: center;
            gap: 8px;
            height: 100%;
            padding: 6px;
            color: ${theme.colors.preto};
            background-color: ${theme.colors.branco};
            border-radius: 16px;
            
            img{
                width: 18px;
            }
        }
    }

    p{
        line-height: 1.5;
        font-size: 16px;
    }
`