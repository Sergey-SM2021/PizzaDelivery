import { FC } from "react"
import { StructureItem, Container } from "./StructureStyled"

const Structure:FC<{img:string,structure:Array<string>}> = ({img, structure}) => {
    return (
        <Container>
            <img src={img} />
            <StructureItem>{structure.join(", ")}</StructureItem>
        </Container>
    )
}

export default Structure
