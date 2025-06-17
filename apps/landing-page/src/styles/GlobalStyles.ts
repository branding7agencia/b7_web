import { createGlobalStyle } from 'styled-components';
import { theme } from './theme';

export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body{
        color: ${theme.colors.branco};
        background-color: ${theme.colors.fundo2};
        font-family: ${theme.fonts.main};
    }
`;
