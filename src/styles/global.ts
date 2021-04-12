import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    *:focus{outline: none;}

    html, body {
        height: 100vh;
        font-size: 62.5%;
    }

    body{
        background: #CAC3C3;;
    }

    body, button, input, textarea{
        font: 400 1.6rem Montserrat;
    }

    .container{
        max-width: 800px;
    }

`


