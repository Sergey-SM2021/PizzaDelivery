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

export const Photo = styled.img`
    width: 100%;
`

export const Name = styled.h3`

`

export const Description = styled.p`
    width: 100%;
    color: rgba(0,0,0,0.65);
    font-size: 20px;
    font-weight: 500;
`
