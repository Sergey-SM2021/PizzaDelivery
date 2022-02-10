import styled from 'styled-components'
import bg from "../../../img/background.png"

export const Content = styled.div`
    width: 410px;
    position: relative;
    left: 268px;
    @media(max-width:1000px){
        left: 180px;
    }
`

export const P = styled.p`
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
`

export const Main = styled.div`
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

export const Flex = styled.div`
    height:100%;
    align-items:center;
    display:flex;
    color: white;
    justify-content: space-around;
`

export const H1 = styled.h1`
    width: 100%;
`