import styled from 'styled-components'

import bg from "../../../img/intro/background.png"

export const Content = styled.div`
    width: 410px;
    position: relative;
    left: 268px;
    @media(max-width:1000px){
        left: 180px;
    }
    @media(max-width: 760px){
        z-index: 2;
        left: 30px;
    }
`

export const Description = styled.p`
    margin: 5px 0px;
    width:100%;
        @media(max-width: 1000px){
            width: 400px;
        }
`

export const Img = styled.img`
    height: 600px;  
    left: 0px;
    top: 100px;
    position:absolute;
    @media(max-width: 1000px){
        height: 500px;
        top: 120px;
    }
    @media(max-width: 760px){
        z-index: 1;
    }
`

export const OfferWrapper = styled.div`
    background-size: cover;
    position: relative;
    color: #F3F3F3;
    background:url(${bg});
    width: 100%;
    display:flex;
    justify-content: center;
    height:100vh;
    align-items:center;
`

export const Container = styled.div`
    height:100%;
    width: 80%;
    margin: 0px auto;
`

export const DishInfo = styled.div`
    height:100%;
    align-items:center;
    display:flex;
    color: white;
    justify-content: space-around;
`

export const Title = styled.h1`
    width: 100%;
    position: relative;
    margin: 10px 0px;
`

export const Price = styled.div`
    font-size: 40px;
    font-weight: 300;
`

export const Note = styled.div`
    position: absolute;
    top: -30px;
    font-size: 20px;
    background: #BE1931;
    height: 30px;
    width: 110px;
    justify-content: center;
    display: flex;
    align-items: center;
`