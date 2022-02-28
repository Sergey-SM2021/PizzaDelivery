import { FC } from "react"

import { Delete, ItemWrapper, Price, Title } from "./Item.style"
import Icon from '../../img/ui/Group 133.svg'
import basketStore from "../../stores/basketStore"
import {IItem} from '../../models/model'

const Item:FC<IItem> = ({price,title,id}) => {
    const DeleteHandler = () => {
        basketStore.delete(id)
    }

    return(<ItemWrapper>
        <Title><Delete onClick={DeleteHandler} src={Icon}/>{title}</Title>
        <Price>{price}</Price>
    </ItemWrapper>)
}

export default Item