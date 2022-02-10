import { FC } from "react"
import { Container, Header, Nav, NavItem } from "./HeaderStyled"

const MyHeader:FC = () => {
    return (<Header>
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
    </Header>)
}

export default MyHeader