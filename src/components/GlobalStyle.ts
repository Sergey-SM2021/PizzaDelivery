import { createGlobalStyle } from "styled-components"

export default createGlobalStyle`
    *{
    margin: 0px;
    padding: 0px;
    }

    h1{
        font-size: 64px;
            @media (max-width: 1000px){
                font-size: 55px;
            }
    }

    p{
    font-size: 30px;
    font-weight: 500;
        @media (max-width: 1000px){
            font-size: 24px;
        }
    }
`