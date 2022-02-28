import styled from 'styled-components'

export const HeaderWrapper = styled.div`
    display: flex;
     justify-content: center;
    position: fixed;
    width: 100%;
    top: 0;
    left: 0;
    background: #242424;
   
`

export const HeaderInner = styled.div`
    width: 100%;
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: space-between;

`


export const MenuList = styled.ul`
    display: flex;
    width: 50%;
    z-index: 1000;
    align-items: center;
    justify-content: space-around;

`

export const MenuListItem = styled.li`
    color: #F3F3F3;
    cursor: pointer;
    list-style: none;
    font-size: 18px;
    font-weight: 400;
`
