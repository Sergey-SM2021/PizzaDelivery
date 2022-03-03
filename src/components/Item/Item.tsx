import { FC, SyntheticEvent } from "react"

import { IItem } from "../../models/model"
import { DishIngredients } from "../DishIngredients/DishIngredients"
import { Description, ItemWrapper, Name, Photo } from "./ItemStyled"
import { Button } from "../ui/common"
import basketStore from "../../stores/basketStore"

const Item:FC<IItem> = ({description,price,structure,title,img,id}) => {
    const clickHandler = (e:SyntheticEvent) => {
        basketStore.addPizza({description,price,structure,title,img,id})
    }

    return(<ItemWrapper>
        <Photo src={img} />
        <Name>{title}</Name>
        <Description>{description}</Description>
        <DishIngredients ingredients={structure}/>
        <Button onClick={()=> clickHandler}>{price}</Button>
    </ItemWrapper>)
}

export default Item