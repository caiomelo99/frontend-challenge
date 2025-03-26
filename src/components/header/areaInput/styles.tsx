import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";

export const InputContainer = styled.div`

`
export const AreaIcon = styled(FontAwesomeIcon)`
    position: absolute;
    right: 0;
    padding-right: 20px;
    color:var(--text-dark);
    cursor: pointer;
`
export const InputArea = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
`
export const PrimaryInput = styled.input`
    width: 353px;
    border-radius: 8px;
    padding: 10px 16px;
    border: none;

    background-color: var(--bg-secondary);

    font-family: inherit;
    font-weight: 400;
    font-size: 14px;
    line-height: 22px;
    color: var(--text-dark);
`