import styled from "styled-components"

export const StructureWrapper = styled.div`
    width: 100%;
    display: flex;
    margin-bottom: 10px;
    margin: 15px 0px;
    align-items: center;
`

export const StructureItems = styled.div<{isOfer? : boolean}>`   
    font-weight: ${props => props.isOfer?"400":"500"};
    font-size: ${props => props.isOfer?"18px":"16px"};
    width:440px;
    margin-left: 10px;
`