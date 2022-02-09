import styled from 'styled-components'
import bg from "../../img/background.png"

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

export const Header = styled.div`
    width:100%;
    color: #F3F3F3;
    height: 40px;
    display: flex;
    justify-content: space-between;
    top: 0px;   
    position: fixed;
    background: #242424;
`

export const Container = styled.div`
    height:100%;
    width: 80%;
    margin: 0px auto;
`

export const Nav = styled.div`
    height:100%;
    align-items:center;
    display:flex;
    justify-content: space-between;
`

export const NavItem = styled.div`
    margin-left:15px;
`