import { FC } from "react"
import { observer } from "mobx-react-lite"

import { Content, DishInfo, Title, Img, OfferWrapper, Description, Price, Note, StructureWrapper, ContentInner } from "./OfferStyled"
import Structure from '../../Structure/Structure'
import OfferStore from "../../../stores/OfferStore"
import { Button, Container } from "../../ui/common"
import basketStore from "../../../stores/basketStore"

export const Offer: FC = observer(() => {
    const ClickHandler = () => {
        basketStore.addPizza(OfferStore.Item)
    }

    return (<OfferWrapper>
        <Container>
            <Content>
                <ContentInner>
                    <Title>
                        <Note>Блюдо дня</Note>
                        {OfferStore.Item.title}
                    </Title>
                    <Description>{
                        OfferStore.Item.description
                    }</Description>
                    <StructureWrapper>
                        {
                            OfferStore.Item.structure?.map(el => <Structure img={el.img} structure={el.structure} />)
                        }
                    </StructureWrapper>
                    <DishInfo>
                        <Button onClick={ClickHandler}>В корзину</Button>
                        <Price>{OfferStore.Item.price}р</Price>
                    </DishInfo>
                </ContentInner>
            </Content>
            <Img src={OfferStore.Item.img} />
        </Container>
    </OfferWrapper>)
})