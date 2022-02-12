import { FC } from "react"

import vk from '../../img/footer/vk.png'
import telegram from '../../img/footer/telegram.png'
import inst from '../../img/footer/inst.png'
import { FooterContent, FooterWrapper, Icon, Icons } from "./FooterStyled"
import { Container } from "../ui/common"

const Footer: FC = () => {
    return (<FooterWrapper>
        <Container>
            <FooterContent>
                <div>© Escape with Pizza, 2022. Все права защищены.</div>
                <Icons>
                    <Icon src={vk} />
                    <Icon src={telegram} />
                    <Icon src={inst} />
                </Icons>
            </FooterContent>
        </Container>
    </FooterWrapper>)
}

export default Footer