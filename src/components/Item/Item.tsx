import { FC } from "react"

import { IItem } from "../../models/model"
import Structure from "../Structure/Structure"
import { Description, ItemWrapper, Name, Photo } from "./ItemStyled"
import { Button } from "../ui/common"

const Item:FC<IItem> = ({description,price,structure,title,img}) => {
    return(<ItemWrapper>
        <Photo src={img} />
        <Name>{title}</Name>
        <Description>{description}</Description>
        {
            structure?.map(str => <Structure structure={str.structure} img={str.img} />)
        }
        <Button>{price}</Button>
    </ItemWrapper>)
}

export default Item