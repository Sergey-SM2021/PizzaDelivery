import { FC } from "react"
import { observer } from "mobx-react-lite"

import Pizza from '../../../img/Pizza-bg-intro.png'
import { Content, DishInfo, Title, Img, OfferWrapper, Description } from "./OfferStyled"
import Structure from '../../Structure/Structure'
import OfferStore from "../../../mobX/OfferStore"
import { Button } from "../../ui/common"

const Offer: FC = () => {
    return (<OfferWrapper>
        <Content>
            <Title>{OfferStore.Item.title}</Title>
            <Description>{
                OfferStore.Item.description
            }</Description>
            {
            OfferStore.Item.structure?.map(el => <Structure img={el.img} structure={el.structure} />)
            }
            <DishInfo>
                <Button>В корзину</Button>
                <div>{OfferStore.Item.price}</div>
            </DishInfo>
        </Content>
        <Img src={Pizza} />
    </OfferWrapper>)
}

export default observer(Offer)