import { Item } from "./DishIngredients.style"
import {IngredientsSpan, IncredientsWrapper} from "./DishIngredients.style";
import {observer} from "mobx-react-lite";

type TProps = {
    img: string;
    ingredients: string;
}

export const DishIngredients = observer(({ img, ingredients} : TProps)=>{
    return(
        <IncredientsWrapper>
        <Item>
            <img src={img} alt={"icon"}/>
            <IngredientsSpan>{ingredients}</IngredientsSpan>
        </Item>
    </IncredientsWrapper>);
})

