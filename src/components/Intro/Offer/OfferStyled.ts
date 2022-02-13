import styled from 'styled-components'

import bg from "../../../img/intro/background.png"

export const OfferWrapper = styled.div`
    padding-top: 21px;
    background-size: cover;
    position: relative;
    color: #F3F3F3;
    background:url(${bg});
    width: 100%;
    display:flex;
    height:100vh;
    align-items:center;
`

export const StructureWrapper = styled.div`
    display: flex;
    flex-direction: column;
`

export const ContentInner = styled.div`
    width: 400px;
    position: relative;
    flex-direction: column;
    @media(max-width: 920px){
        z-index: 2;
    }
`

export const Content = styled.div`
    width: 100%;
    display: flex;
    justify-content: flex-end;
`

export const Description = styled.p`
    margin: 5px 0px;
    width:100%;
        @media(max-width: 1000px){
            width: 400px;
        }
        @media(max-width: 920px){
            margin: 0px;
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
    @media(max-width: 920px){
        z-index: 1;
    }
`

export const Container = styled.div`
    height:100%;
    width: 80%;
    margin: 0px auto;
`

export const DishInfo = styled.div`
    height:45px;
    align-items:center;
    display:flex;
    color: white;
    justify-content: space-between;
`

export const Title = styled.h1`
    width: 100%;
    position: relative;
    @media(max-width: 920px){
        margin: 0px;
    }
`

export const Price = styled.div`
    font-size: 40px;
    font-weight: 300;
`

export const Note = styled.div`
    margin: 0px;
    position: absolute;
    top: -20px;
    font-size: 20px;
    background: #BE1931;
    height: 30px;
    width: 160px;
    justify-content: center;
    display: flex;
    align-items: center;
    @media(max-width: 920px){
        top: -20px;
    }
`