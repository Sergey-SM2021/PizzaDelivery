import styled from 'styled-components'
import bg from "../../../img/background.png"

export const P = styled.p`
    width:447px;
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

export const Content = styled.div`
    position: relative;
    left: 270px;
    @media(max-width:1000px){
        left: 180px;
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
    width: 30px;
`

export const Structure = styled.div`
    font-weight: 300;
    font-size: 18px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 10px;
`

export const StructureItem = styled.div`
    width:440px;
        @media(max-width: 1000px){
            width: 400px;
        }
`