import { FC } from "react"
import { Container, HeaderWrapper, Nav, NavItem } from "./HeaderStyled"

const Header:FC = () => {
    return (<HeaderWrapper>
        <Container>
            <Nav>
                <div>LOGO</div>
                <Nav>
                    <NavItem>О компании</NavItem>
                    <NavItem>Наш ресторан</NavItem>
                    <NavItem>Акции</NavItem>
                </Nav>
                <div>Промокод</div>
            </Nav>
        </Container>
    </HeaderWrapper>)
}

export default Header