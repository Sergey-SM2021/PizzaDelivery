import { FC } from "react"
import { observer } from "mobx-react-lite"

import { Content, DishInfo, Title, Img, OfferWrapper, Description, Price, Note } from "./OfferStyled"
import Structure from '../../Structure/Structure'
import OfferStore from "../../../mobX/OfferStore"
import { Button } from "../../ui/common"

const Offer: FC = () => {
    return (<OfferWrapper>
        <Content>
            <Title>
                <Note>Блюдо дня</Note>
                {OfferStore.Item.title}
            </Title>
            <Description>{
                OfferStore.Item.description
            }</Description>
            {
                OfferStore.Item.structure?.map(el => <Structure img={el.img} structure={el.structure} />)
            }
            <DishInfo>
                <Button>В корзину</Button>
                <Price>{OfferStore.Item.price}р</Price>
            </DishInfo>
        </Content>
        <Img src={OfferStore.Item.img} />
    </OfferWrapper>)
}

export default observer(Offer)