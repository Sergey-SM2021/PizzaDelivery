import { IStructure } from "../../models/model"
import { StructureItem, StructureWrapper } from "./DishIngredients.style"

type TProps = {
    ingredients: Array<IStructure> | undefined,
    isOffer?:boolean
}

export const DishIngredients = ({ ingredients,isOffer }: TProps) => {
    return (<>{ingredients?.map(el =>
        <StructureWrapper>
            <img src={el.img} />
            <StructureItem isOfer={isOffer}>{el.structure.join(", ")}</StructureItem>
        </StructureWrapper>)}</>)
}