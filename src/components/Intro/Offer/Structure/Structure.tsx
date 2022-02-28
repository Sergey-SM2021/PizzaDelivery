import { FC } from "react"
import { Item } from "./Structure.style"
import {IngredientsSpan} from "./Structure.style";

export const Structure:FC<{img:string,structure:string}> = ({img,structure}) => {
    return(<ul>
        <Item><img src={img}/><IngredientsSpan>{structure}</IngredientsSpan></Item>
    </ul>)
}