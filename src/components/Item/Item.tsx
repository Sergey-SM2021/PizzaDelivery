import { FC, SyntheticEvent } from "react"

import { IItem } from "../../models/model"
import { DishIngredients } from "../DishIngredients/DishIngredients"
import { ItemDescription, ItemWrapper, ItemPhoto, ItemTitle } from "./Item.style"
import { Button } from "../ui/common"
import basketStore from "../../stores/basketStore"

const Item:FC<IItem> = ({description,price,structure,title,img,id}) => {
    const clickHandler = (e:SyntheticEvent) => {
        basketStore.addPizza({description,price,structure,title,img,id})
    }

    return(<ItemWrapper>
        <ItemPhoto src={img} />
        <ItemTitle>{title}</ItemTitle>
        <ItemDescription>{description}</ItemDescription>
        <DishIngredients ingredients={structure}/>
        <Button onClick={clickHandler}>{price }$  В корзину</Button>
    </ItemWrapper>)
}

export default Item