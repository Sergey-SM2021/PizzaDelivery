import { FC } from "react"
import { observer } from "mobx-react-lite"

import { Delete, ItemWrapper, ItemPrice, ItemTitle, ItemOrder } from "./Item.style"
import Icon from '../../assets/Icons/cancel-icon.svg'
import basketStore from "../../stores/basketStore"
import { IItem } from '../../models/model'

export const Item: FC<IItem> = observer(({ price, title, id, order }) => {
    const DeleteHandler = () => {
        basketStore.delete(id)
    }

    return (<ItemWrapper>
        <ItemTitle>
            <ItemOrder>{order}.</ItemOrder>
            <Delete onClick={DeleteHandler} src={Icon} />
            {title}
        </ItemTitle>
        <ItemPrice>{price}$.</ItemPrice>
    </ItemWrapper>)
})