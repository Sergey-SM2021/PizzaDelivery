import styled from "styled-components"

export const MainWrapper = styled.div`
    padding-top: 100px;
`

export const MainItems = styled.div`
    row-gap: 24px;
    justify-items: center;
    width: 95%;
    display: grid;
    grid-template: 1fr/ 1fr 1fr 1fr;
    @media(max-width: 1000px){
        grid-template: 1fr/ 1fr 1fr;
        width: 80%;
    }
    @media(max-width: 760px){
        grid-template: 1fr/ 1fr;
        width: 80%;
        justify-items: start;
    }
`

export const Title = styled.h2`
    margin-top: 30px;
    margin-bottom: 10px;
`