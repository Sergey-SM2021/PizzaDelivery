import { FC } from "react"

import { Delete, ItemWrapper, ItemPrice, ItemTitle } from "./Item.style"
import Icon from '../../assets/Icons/cancel-icon.svg'
import basketStore from "../../stores/basketStore"
import { IItem } from '../../models/model'

const Item: FC<IItem> = ({ price, title, id }) => {
    const DeleteHandler = () => {
        basketStore.delete(id)
    }

    return (<ItemWrapper>
        <ItemTitle>
            <Delete onClick={DeleteHandler} src={Icon} />
            {title}</ItemTitle>
        <ItemPrice>{price}</ItemPrice>
    </ItemWrapper>)
}

export default Item