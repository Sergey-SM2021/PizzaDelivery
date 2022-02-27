import { FC, useState } from "react"
import { Container } from "../../ui/common"
import { Burger, HeaderInner, HeaderWrapper, List, Logo, Menu } from "./HeaderStyled"

export const Header: FC = () => {
    const [isOpen, setVisability] = useState<boolean>(false)
    const HandleBurgerClick = () => {
        setVisability(!isOpen)
    }
    return (<HeaderWrapper>
        <Container>
            <HeaderInner>
                <Logo><img src="/Logo.png" alt="Logo" /></Logo>
                <Burger open={isOpen} onClick={HandleBurgerClick}>
                    <span></span>
                </Burger>
                <Menu open={isOpen}>
                    <List>
                        <li>О компании</li>
                        <li>Наш ресторан</li>
                        <li>Акции</li>
                        <li><input type="text" placeholder="ПРОМОКОД" /></li>
                    </List>
                </Menu>
            </HeaderInner>
        </Container>
    </HeaderWrapper>)
}