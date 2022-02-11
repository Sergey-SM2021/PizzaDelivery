import { createGlobalStyle } from "styled-components"

export default createGlobalStyle`
    *{
    margin: 0px;
    padding: 0px;
    }

    h1{
        line-height: 60px;
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

    button{
    background: #F4900C;
    width: 160px;
    height: 30px;
    border: none;
    border-radius: 4px;
    transition: 0.9s;  
    &:Hover{
        box-shadow: 17px 4px 50px #000; 
    }
}`