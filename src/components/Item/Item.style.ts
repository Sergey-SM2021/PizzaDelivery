import styled from "styled-components"

export const ItemWrapper = styled.div`
    width: 310px;
    @media(max-width: 1100px){
        width: 285px;
    }
    @media(max-width: 1000px){
        width: 300px;
    }
`

export const ItemPhoto = styled.img`
    width: 100%;
`

export const ItemTitle = styled.h3`
    font-weight: 600;
    margin: 10px 0px;
`

export const ItemDescription = styled.p`
    width: 100%;
    color: rgba(0,0,0,0.65);
    font-size: 20px;
    font-weight: 500;
`