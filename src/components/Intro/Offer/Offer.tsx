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
    DayDishPreview } from "./OfferStyled"
import OfferStore from "../../../stores/OfferStore"
import basketStore from "../../../stores/basketStore"
import { DishIngredients } from "./DishIngredients/DishIngredients"


export const Offer = observer(()=> {
    const handleBuy = () => {
        basketStore.addPizza(OfferStore.Item)
    }
    return (<IntroWrapper>
        <Container>
            <IntroContent>
                <DishDayTicket >Блюдо дня</DishDayTicket>
                <DishDayTitle>{OfferStore.Item.title}</DishDayTitle>
                <DishDayDescription>{OfferStore.Item.description}</DishDayDescription>
                {OfferStore.Item.structure?.map(el =>
                    <DishIngredients img={el.img} ingredients={el.structure.join(", ")}/>)}
                <ActionWrapper>
                    <Button onClick={handleBuy}>В корзину</Button>
                    <DayDishPrice>{OfferStore.Item.price}$</DayDishPrice>
                </ActionWrapper>
            </IntroContent>
        </Container>
        <DayDishPreview>
            <img src={OfferStore.Item.img} alt="" />
        </DayDishPreview>
    </IntroWrapper>)

} )