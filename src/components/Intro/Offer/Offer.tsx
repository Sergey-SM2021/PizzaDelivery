import { FC } from "react"
import { observer } from "mobx-react-lite"

import Pizza from '../../../img/Pizza-bg-intro.png'
import { Content, Flex, H1, Img, Main, P } from "./OfferStyled"
import Structure from './Structure/Structure'
import OfferStore from "../../../mobX/OfferStore"

const Offer: FC = () => {
    return (<Main>
        <Content>
            <H1>{OfferStore.title}</H1>
            <P>{
                OfferStore.description
            }</P>
            {OfferStore.structure.map(el => <Structure img={el.img} structure={el.structure} />)}
            <Flex>
                <button>В корзину</button>
                <div>{OfferStore.price}</div>
            </Flex>
        </Content>
        <Img src={Pizza} />
    </Main>)
}

export default observer(Offer)