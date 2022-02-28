import styled from "styled-components";

 export const StyledInput = styled("input")`
    border: 1px solid #F3F3F3;
    border-radius: 12px;
    user-focus: none;
    outline: none;
    padding-top: 6px;
    padding-bottom: 6px;
    padding-left: 20px;
    background: none;
    color: white;
    line-height: 22px;
    min-width: 220px;
  
    &::placeholder{
      text-transform: uppercase;
    } `