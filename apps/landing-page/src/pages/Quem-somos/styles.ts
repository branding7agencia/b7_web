import styled from "styled-components";
import { theme } from "../../styles/theme";

export const StylesQuemSomos = styled.div`
    display: flex;
    flex-direction: column;
    text-align: center;
    padding: 32px;

    /*Classe para estilizar o container que cóntem o título*/
    .head{
        border: 1px solid ${theme.colors.roxo2};
        border-radius: 16px;
        .logo{
            
            padding: 8px;
            img{
                width: 96px;
            }
        }
        h2{
            font-size: 40px;
        }
    }

    /*Classepara estilizar o container que contém texto*/
    .content{
        .frame{
            img{
                width: 300px;
                margin: 24px 0;
            }
        }
        .text{
            display: flex;
            flex-direction: column;
            gap: 32px;
            h3{
                font-size: 32px;;
            }
            p{
                font-size: 16px;
            }

            .metrics{
                display: flex;
                flex-direction: column;
                gap: 16px;
                .insigth{
                    h3{
                        font-size: 24px;
                    }
                    span{
                        font-size: 24px;
                        color: ${theme.colors.rosa};
                        font-weight: bold;
                    }
                }
            }
        }
    }

    @media (min-width: 768px) {
        .head{
            display: flex;
            justify-content: center;
            align-items: center;
            gap: 16px
        }

        .content{
            display: flex;
            align-items: center;
            gap: 32px;

            .text{
                text-align: start;

                .story{
                    h3{
                        margin-bottom: 8px;
                    }
                }
            
                .metrics{
                    gap: 24px;
                    flex-direction: row;
                    .insigth{
                        span{
                            font-weight: bold;
                            font-size: 18px;                        }
                        h3{
                            font-size: 18px;
                        }
                    }
                }
            }
        }
    }
`