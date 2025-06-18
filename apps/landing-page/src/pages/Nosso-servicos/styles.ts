import styled from "styled-components";

export const StylesNossosServicos = styled.div`
    padding: 32px;
    display: flex;
    flex-direction: column;
    align-items: center;

    .head{
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
        gap: 24px;
        margin-bottom: 32px;
        h2{
            font-size: 32px;
        }
    }

    .cards{
        display: flex;
        flex-direction: column;
        gap: 32px;
    }

    @media (min-width: 768px) {
        .head{
            width: 100%;
            flex-direction: row;
            justify-content: space-between;
        }

        .cards{
            gap: 0px;
            flex-direction: row;
            width: 80%;
            justify-content: space-between;
        }
    }
`