import { createGlobalStyle } from "styled-components"
import styled from "styled-components"

export default createGlobalStyle`
    *{
    margin: 0px;
    padding: 0px;
    font-family: 'Montserrat', sans-serif;
    }
    
    h3{
        font-size: 31px;
        font-weight: 500;
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

    h2{
        font-size: 42px;
    }
`

export const Button = styled.button`
    background: #F4900C;
    width: 165px;
    margin-top: 20px;
    font-weight: 600;
    font-size: large;
    height: 34px;
    border: none;
    border-radius: 4px;
    transition: 0.9s;  
    &:Hover{
        box-shadow: 17px 4px 50px #000; 
    }
`

export const Container = styled.div`
    width: 100%;
    padding-left: 40px;
    padding-right: 240px;
`