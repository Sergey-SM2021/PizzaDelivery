import { FC } from "react"
import { StructureItem, StructureWrapper } from "./StructureStyled"

const Structure:FC<{img:string,structure:Array<string>}> = ({img, structure}) => {
    return (
        <StructureWrapper>
            <img src={img} />
            <StructureItem>{structure.join(", ")}</StructureItem>
        </StructureWrapper>
    )
}

export default Structure
