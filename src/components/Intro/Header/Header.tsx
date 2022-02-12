import { FC } from "react"

import logo from '../../../img/intro/Logo.png'
import { Container } from "../../ui/common"
import { HeaderWrapper, Logo, Nav, NavItem, PromoCode } from "./HeaderStyled"

const Header:FC = () => {
    return (<HeaderWrapper>
        <Container>
            <Nav>
                <Logo src={logo}/>
                <Nav>
                    <NavItem>О компании</NavItem>
                    <NavItem>Наш ресторан</NavItem>
                    <NavItem>Акции</NavItem>
                </Nav>
                <PromoCode placeholder="     ПРОМОКОД"/>
            </Nav>
        </Container>
    </HeaderWrapper>)
}

export default Header