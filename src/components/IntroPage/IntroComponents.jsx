import styled from "styled-components";

export const ChoiceBtn = styled.button`
    border-radius: 50px;
    white-space: nowrap;
    background: #fff;
    padding: 14px 48px;
    color: black;
    font-size: 24px;
    outline: none;
    border: 2px solid black;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.2s ease-in-out;

    &:hover{
        transition: all 0.2s ease-in-out;
        background: #01bf71;
    }
`;