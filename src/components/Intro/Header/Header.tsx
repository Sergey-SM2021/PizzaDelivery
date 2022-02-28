import { FC } from "react"
import { Container } from "../../ui/common"
import { HeaderInner, HeaderWrapper, MenuList, MenuListItem } from "./HeaderStyled"
import {StyledInput} from "../../general/PromoInput";
import { ReactComponent as Logo } from "../../../assets/Icons/logo.svg"
export const Header: FC = () => {

    return (<HeaderWrapper>
        <Container>
            <HeaderInner>
                <Logo/>
                 <MenuList>
                        <MenuListItem>О компании</MenuListItem>
                        <MenuListItem>Наш ресторан</MenuListItem>
                        <MenuListItem>Акции</MenuListItem>
                    </MenuList>
                <StyledInput placeholder={"Промокод"}/>
            </HeaderInner>
        </Container>
    </HeaderWrapper>)
}