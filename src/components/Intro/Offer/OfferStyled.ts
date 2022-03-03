import styled from 'styled-components'
import {keyframes} from "styled-components";
import { fadeInLeft, fadeInUp } from 'react-animations'

const fadeLeft = keyframes`${fadeInLeft}`;
const fadeUp = keyframes`${fadeInUp}`;

export const IntroContent = styled.div`
    position: relative;
    left: 800px;
    width: 50%;
    @media(max-width: 1050px){
        right: -400px;
        width: 50%;
    }
    @media(max-width: 784px){
        right: -330px;
    }
    @media(max-width: 724px){
        right: -300px;
    }
    @media(max-width: 700px){
        right: -260px;
    }
    @media(max-width: 585px){
        p{
            font-size:20px;
        }
        span{
            font-size:15px;
        }
        right: -280px;
    }
`

export const IntroWrapper = styled.div`
    position: relative;
    box-sizing: border-box;
    padding: 180px 0 30px 0;
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    background: url('/background.png') no-repeat center;
    background-size: cover;
    color: #fff;
`

export const DishDayInfoWrapper=styled.div`animation: 1s ${fadeUp};`

export const DishDayTicket = styled.span`
    background-color: #BE1931;
    font-weight: 700;
    width: fit-content;
    padding: 10px 6px;
    display: block;
    margin-bottom: 20px;
`

export const DishDayTitle = styled.div`
    font-weight: 500;
    font-size: 84px;
    margin-bottom: 20px;
    @media(max-width: 585px){
        font-size: 24px;
    }
`

export const DishDayDescription = styled.p`
    font-size: 24px;
    max-width: 510px;
    font-weight: 700;
    margin-bottom: 30px;
`

export const ActionWrapper = styled.div`
    margin-top: 70px;
    display: flex;
    align-items: center;
`

export const DayDishPrice = styled.span`
    font-size: 42px;
    display: block;
    margin-left: 87px;
`

export const DayDishPreview = styled.div`
    animation: 1s ${fadeLeft};;
    position: absolute;
    top: 150px;
    width: 750px;
    img{
      width: 100%;
    }
  
`