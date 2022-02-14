import { FC } from "react"

import { ItemWrapper, Price, Title } from "./ItemStyled"

const Item:FC<{price:number,title:string}> = ({price,title}) => {
    return(<ItemWrapper>
        <Title>{title}</Title>
        <Price>{price}</Price>
    </ItemWrapper>)
}

export default Item