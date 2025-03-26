import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";

export const FilterContainer = styled.div`
    display: flex;
    align-items: center;
    position: relative;

    button {
        font-family: inherit;
        font-weight: 400;
        font-size: 14px;
        line-height: 22px;
        color: var(--text-dark);
        border: none;
        background-color: transparent;
        cursor: pointer;

        display: flex;
        align-items: center;
        text-align: center;

    }
`
export const PriorityFilter = styled.ul`
    position: absolute;
    padding: 12px 16px;
    width: 250px;
    list-style: none;
    background: #FFF;
    box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
    border-radius: 4px;

    top: 100%;

    li {
        color: var(--text-dark);
        font-weight: 400;
        font-size: 14px;
        line-height: 22px;
        cursor: pointer;
    }

    li + Li { //só aplica a mt se tiver um li em cima
        margin-top: 4px;
    }
`

export const FilterIcon = styled(FontAwesomeIcon)`
    margin-left: 16px;
`