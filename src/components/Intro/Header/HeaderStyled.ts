import styled from 'styled-components'

export const HeaderWrapper = styled.div`
    width:100%;
    color: #F3F3F3;
    height: 40px;
    display: flex;
    justify-content: space-between;
    top: 0px;   
    position: fixed;
    background: #242424;
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

export const Logo = styled.img`
    height: 90%;
`

export const PromoCode = styled.input`
    background: #242424;
    border: 1px solid #ffffffcb;
    color: #ffffffcb;
    border-radius: 10px;
`