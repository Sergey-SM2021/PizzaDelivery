import { createGlobalStyle } from "styled-components"
import styled from "styled-components"

export default createGlobalStyle`
    *{
    margin: 0px;
    padding: 0px;
    font-family: 'Montserrat', sans-serif;
    }
    html{
      height: 100%;
    }
    
    body{
      height: 100%;
    }
    
    #root{
      height: 100%;
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
    font-weight: 600;
    font-size: large;
    width: 200px;
    height: 50px;
    cursor: pointer;
    border: none;
    border-radius: 12px;
    transition: 0.9s;
    &:hover{
        box-shadow: 17px 4px 50px #000; 
    }
    margin-top: 10px;
`

export const Container = styled.div`
    width: 100%;
    height: 100%;
    padding-left: 40px;
    padding-right: 240px;
    box-sizing: border-box;
`