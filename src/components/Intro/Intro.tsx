import { FC } from "react"
import Pizza from '../../img/Pizza-bg-intro.png'
import { Container, Content, Header, Img, Main, Nav, NavItem, P } from "./IntroStyled"

const Intro: FC = () => {
    return (<>
        <Main>
            <Content>
                <h1>Пепперони</h1>
                <P>
                    Бессмертная итальянская классика
                    с новым взглядом на рецептуру.
                    Из каменной печи уже в России.
                </P>
            </Content>
            <Img src={Pizza} />
        </Main>
        <Header>
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
        </Header>
    </>)
}

export default Intro