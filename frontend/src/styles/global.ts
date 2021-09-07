import {createGlobalStyle} from 'styled-components';

export const colors = {
  primary: '#3C2F57',
  secondary: '#FFE97F',
  tertiary: '#F7D7C9',
  background1: '#111111',
  background2: '#2B214B',
  texts: '#D8D8D8'
}

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline:0;
  }

  body {
    background: ${colors.background1};
    color: ${colors.texts};
    -webkit-font-smoothing: antialiased;
  }

  body, input, button {
    font-family: 'Roboto Slab', serif;
    font-size: 1rem;
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 500;
  }

  button {
    cursor: pointer;
  }

`;