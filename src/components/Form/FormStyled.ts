import { Field as FormikField, Form as FormikForm } from "formik"
import styled from "styled-components"
import bg from '../../img/intro/background.png'

export const FormWrupper = styled.div`
    position: absolute;
    top: -110px;
    left: -400px;
    background-image: url(${bg});
    background-size: cover;
    height: 260px;
    width: 310px;
    color: white;
    z-index: 11;
`
export const Title = styled.h4`
    
`

export const GB = styled.div`
    z-index: 1;
    position: fixed;
    top: 0px;
    left: 0px;
    right: 0px;
    bottom: 0px;
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