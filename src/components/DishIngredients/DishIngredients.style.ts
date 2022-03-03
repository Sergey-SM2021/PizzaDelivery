import styled from "styled-components"

export const StructureWrapper = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    margin-bottom: 10px;
    margin: 15px 0px;
`

export const StructureItem = styled.div<{isOfer? : boolean}>`   
    font-weight: ${props => props.isOfer?"500":"600"};
    font-size: ${props => props.isOfer?"22px":"20px"};
    width:440px;
    margin: 0px 0px 0px 10px;
`