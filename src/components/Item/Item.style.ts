import styled from "styled-components"

export const ItemWrapper = styled.div`
    width: 310px;
    margin: 0px 0px 50px 0px ;
    &:last-child{
        margin: 0px;
    }
`

export const ItemPhoto = styled.img`
    width: 100%;
`

export const ItemTitle = styled.h3`
    font-weight: 600;
    margin: 23px 0px;
`

export const ItemDescription = styled.p`
    width: 100%;
    color: rgba(0,0,0,0.65);
    font-size: 20px;
    font-weight: 500;
    margin-bottom: 25px ;
`