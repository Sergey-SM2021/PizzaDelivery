import styled from "styled-components"

export const StructureWrapper = styled.div`
    font-weight: 300;
    font-size: 18px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 10px;
    margin: 15px 0px;
    @media(max-width: 760px){
        margin: 0px;
    }
`

export const StructureItem = styled.div`
    width:440px;
        @media(max-width: 1000px){
            width: 400px;
        }
`