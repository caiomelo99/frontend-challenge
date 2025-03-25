import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";

export const CartArea = styled.div`
    position: relative;
`
export const CartIcon = styled(FontAwesomeIcon)`
    font-size: 25px;
    cursor: pointer;
`
export const CartCount = styled.span`
    width: 17px;
    height: 17px;
    border-radius: 100%;
    padding: 2px 8px;
    
    background-color: var(--delete-color);
    color: white;

    position: absolute;
    right: -10px;
    top: 50%;

    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
`