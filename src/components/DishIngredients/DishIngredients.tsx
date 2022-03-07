import { observer } from "mobx-react-lite"

import { IStructure } from "../../models/model"
import { StructureItems, StructureWrapper } from "./DishIngredients.style"

type TProps = {
    ingredients: Array<IStructure> | undefined,
    isOffer?:boolean
}

export const DishIngredients = observer(({ ingredients,isOffer }: TProps) => {
    return (<>{ingredients?.map(el =>
        <StructureWrapper>
            <img src={el.img} />
            <StructureItems isOfer={isOffer}>{el.structure.join(", ")}</StructureItems>
        </StructureWrapper>)}</>)
})