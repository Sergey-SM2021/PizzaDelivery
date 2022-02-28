import styled from 'styled-components'
import { Button } from '../../ui/common'

export const IntroContent = styled.div`
    position: relative;
    right: -600px;
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
    padding: 80px 0px 30px 0px;
    min-height: 100vh;
    width: 100%;
    background: url('/background.png') no-repeat center;
    background-size: cover;
    color: #fff;
    @media(max-width: 767px){
        padding: 55px 0px 30px 0px;
    }
`

export const DishDay = styled.span`
    background-color: #BE1931;
`

export const Title = styled.div`
    font-weight: 500;
    font-size: 40px;
    @media(max-width: 585px){
        font-size: 24px;
    }
`

export const Description = styled.p`
    
`

export const ByDish = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`

export const Price = styled.div`
    font-size: 30px;
`

export const Pizza = styled.div`
    position: absolute;
    top: 70px;
    img{
        width:500px;
    }
    @media(max-width:1050px){
        top: 130px;
        img{
            width:400px;
        }
    }
    @media(max-width:725px){
        top: 200px;
        img{
            width:320px;
        }
    }
`