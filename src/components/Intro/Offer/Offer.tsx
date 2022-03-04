import {observer} from "mobx-react-lite";
import { Button, Container } from "../../ui/common"
import
    { ActionWrapper,
    DishDayDescription,
    DishDayTicket,
    IntroContent,
    IntroWrapper,
    DayDishPrice,
    DishDayTitle,
        DishDayInfoWrapper,
    DayDishPreview } from "./OfferStyled"
import OfferStore from "../../../stores/OfferStore"
import basketStore from "../../../stores/basketStore"
import { DishIngredients } from "../../DishIngredients/DishIngredients"


export const Offer = observer(()=> {
    const handleBuy = () => {
        basketStore.addPizza(OfferStore.Item)
    }
    return (<IntroWrapper>
        <Container>
            <IntroContent>
                <DishDayInfoWrapper>
                <DishDayTicket >Блюдо дня</DishDayTicket>
                <DishDayTitle>{OfferStore.Item.title}</DishDayTitle>
                <DishDayDescription>{OfferStore.Item.description}</DishDayDescription>
                <DishIngredients isOffer ingredients={OfferStore.Item.structure}/>
                <ActionWrapper>
                    <Button onClick={handleBuy}>В корзину</Button>
                    <DayDishPrice>{OfferStore.Item.price}$</DayDishPrice>
                </ActionWrapper>
                </DishDayInfoWrapper>
            </IntroContent>
        </Container>
        <DayDishPreview>
            <img src={OfferStore.Item.img} />
        </DayDishPreview>
    </IntroWrapper>)

} )