import { FC } from "react"

import { Container } from "../../ui/common"
import { BTN, ByDish, Description, DishDay, IntroContent, IntroWrapper, Price, Title, Pizza } from "./OfferStyled"
import PizzaImg from '../../../img/intro/Pizza-bg-intro.png'
import store from "../../../stores/OfferStore"
import { Structure } from "./Structure/Structure"

export const Offer: FC = () => {
    return (<IntroWrapper>
        <Container>
                <IntroContent>
                    <DishDay >Блюдо дня</DishDay>
                    <Title>{store.Item.title}</Title>
                    <Description>{store.Item.description}</Description>
                        {store.Item.structure?.map(el => <Structure img={el.img} structure={el.structure.join(", ")}/>)}
                    <ByDish>
                        <BTN>В корзину</BTN><Price>{store.Item.price}$</Price>
                    </ByDish>
                </IntroContent>
        </Container>
        <Pizza>
            <img src={PizzaImg} alt="" />
        </Pizza>
    </IntroWrapper>)
}