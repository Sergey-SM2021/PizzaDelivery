import { Field as FormikField, Form as FormikForm } from "formik"
import styled from "styled-components"
import bg from '../../assets/img/intro/background.png'

export const FormWrupper = styled.div`
    z-index: 11;
    position: relative;
    background-image: url(${bg});
    background-size: cover;
    height: 260px;
    width: 310px;
    color: white;
`

export const Title = styled.h4`
    
`

export const Popup = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1;
    position: fixed;
    top: 0px;
    left: 0px;
    right: 0px;
    bottom: 0px;
    background: rgba(255,255,255,0.5);
    backdrop-filter: blur(5px);
`

export const Field = styled(FormikField)`
    height: 30px;
    border-radius: 4px;
    border: 1px solid white;
    background: none;
`

export const Form = styled(FormikForm)`
    height: 100%;
`

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    height: 100%;
    width: 90%;
    margin: 0px auto;
`

export const Bg = styled.div`
    position: fixed;
    background-color: antiquewhite;
    top: 0px;
    right: 0px;
    left:0px;
    bottom: 0px;
`

export const BackgroundLayer = styled.div`
    position:absolute;
    top: 0px;
    left: 0px;
    right: 0px;
    bottom: 0px;
`