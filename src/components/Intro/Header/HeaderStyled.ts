import styled from 'styled-components'

export const HeaderWrapper = styled.div`
    color:  #fff;
    position: fixed;
    width: 100%;
    top: 0px;
    left: 0px;
    z-index: 50;
    &::before{
        content: "";
        position: absolute;
        top: 0px;
        left: 0px;
        width: 100%;
        height: 100%;
        background-color: #242424;
        z-index: 9;
    }
`

export const HeaderInner = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`

export const Logo = styled.div`
    position: relative;
    z-index: 10;
    @media(max-width: 767px){
        img{
            width:120px
        }
    }
`

export const Burger = styled.div<{ open: boolean }>`
    display: none;
    @media(max-width: 767px){
        position: relative;
        width: 30px;
        height: 20px;
        z-index: 10;
        display: block;
        span{
            top: 9px;
            transform: ${props => (props.open ? "scale(0)" : "")};
            transition: 0.3s;
        }
        &::before,::after,span{
            position: absolute;
            background-color: #fff;
            width: 100%;
            height: 2px;
            content:"";
            transition: 0.3s;
        }
        &::before{
            transform: ${props => (props.open ? "rotate(-45deg)" : "")};
            top: ${props => (props.open ? "-100" : "0")};
        }
        &::after{
            transform: ${props => (props.open ? "rotate(45deg)" : "")};
            bottom: ${props => (props.open ? "1" : "0")};
        }
    }
`

export const Menu = styled.div<{ open: boolean }>`
    @media(max-width: 767px){
        padding: 100px 0px 0px 0px;
        position: fixed;
        top: ${props => (props.open ? "0px" : "-1000vh")};
        left: 0px;
        height: 100%;
        width: 100%;
        background-color: #b486ae;
    }
`

export const List = styled.ul`
    position: relative;
    z-index: 10;
    display: flex;
    align-items: center;
    li{
        margin: 0px 0px 0px 20px;
        list-style: none;
        text-transform: uppercase;
    }
    @media(max-width: 767px){
        display: block;
        li{
            margin: 0px 0px 20px 30px;
        }
    }
`