import { FC } from "react"

import { Button, Container } from "../../ui/common"
import { ByDish, Description, DishDay, IntroContent, IntroWrapper, Price, Title, Pizza } from "./OfferStyled"
import OfferStore from "../../../stores/OfferStore"
import basketStore from "../../../stores/basketStore"
import { Structure } from "./Structure/Structure"

export const Offer: FC = () => {
    const handleBuy = () => {
        basketStore.addPizza(OfferStore.Item)
    }
    return (<IntroWrapper>
        <Container>
                <IntroContent>
                    <DishDay >Блюдо дня</DishDay>
                    <Title>{OfferStore.Item.title}</Title>
                    <Description>{OfferStore.Item.description}</Description>
                        {OfferStore.Item.structure?.map(el => <Structure img={el.img} structure={el.structure.join(", ")}/>)}
                    <ByDish>
                        <Button onClick={handleBuy}>В корзину</Button><Price>{OfferStore.Item.price}$</Price>
                    </ByDish>
                </IntroContent>
        </Container>
        <Pizza>
            <img src={OfferStore.Item.img} alt="" />
        </Pizza>
    </IntroWrapper>)
}