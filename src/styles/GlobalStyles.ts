import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin:0;
    padding:0;

    box-sizing: border-box;
    border:0;
    outline:0;
  }

  html, body{
    font-family: 'Roboto', sans-serif;
  }

  html, body, #root{
    height: 100%;
  }

  :root {
    --bg-header: #1976d2;
    --primary: #212121;
    --secondary: #737373;
    --tertiary: #9e9e9e;

    --white: #fff;
    --green: #2e7d32;
    --red: #c62828;
    --gray: #424242;
    --blue: #1976d2;
    --orange: #ff6f00;
    --light-gray: #e0e0e0;
    
  }
`;
