import { IStructure } from "../../models/model"
import { StructureItem, StructureWrapper } from "./StructureStyled"

type DishIngredientsType = {
    ingredients: Array<IStructure> | undefined,
    isOffer?:boolean
}

export const DishIngredients = ({ ingredients,isOffer }: DishIngredientsType) => {
    return (<>{ingredients?.map(el =>
        <StructureWrapper>
            <img src={el.img} />
            <StructureItem isOfer={isOffer}>{el.structure.join(", ")}</StructureItem>
        </StructureWrapper>)}</>)
}