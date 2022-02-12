import { FC } from "react"
import styled from "styled-components"

import vk from '../img/footer/vk.png'
import telegram from '../img/footer/telegram.png'
import inst from '../img/footer/inst.png'
import {Container as CommonContainer} from "../components/ui/common"

const Footer: FC = () => {
    return (<FooterWrapper>
        <Container>
            <div>© Escape with Pizza, 2022. Все права защищены.</div>
        <Icons>
            <Icon src={vk} />
            <Icon src={telegram} />
            <Icon src={inst} />
        </Icons>
        </Container>
    </FooterWrapper>)
}

const Container = styled(CommonContainer)`
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const Icon = styled.img`
    height: 15px;
`

const FooterWrapper = styled.div`
    background: #242424;
    height: 50px;
    color: white;
    display: flex;
    justify-content: space-between;
`
const Icons = styled.div`
    width: 100px;
    display: flex;
    justify-content: space-around;
`

export default Footer