import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
   
    * {
        margin: 0;
        padding: 0;
    };

    h1{
        font-size: 32px;
        line-height: 150%;
        font-weight: 700;
        margin-bottom: 36px;
    }

    h2{
        font-size: 24px;
        line-height: 100%;
        font-weight: 700;
    }

    h3{
        font-size: 16px;
        line-height: 100%;
        font-weight: 700;
    }

    body {        
        font-family: "Montserrat", sans-serif;
        font-optical-sizing: auto;
        font-weight: regular;
        font-style: normal;
        font-size: 12px;
    }
    
`;
