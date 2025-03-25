import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";

export const TagHeader = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px 160px;
`
export const Logo = styled.a`
    color: var(--logo-color);
    font-weight: 400;
    font-size: 40px;
    line-height: 150%;
    cursor: pointer;
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
export const AreaIcon = styled(FontAwesomeIcon)`
    position: absolute;
    right: 0;
    padding-right: 20px;
    color:var(--text-dark);
    cursor: pointer;

`
export const AreaInput = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
`
export const RightSide = styled.div`
    display: flex;
    align-items: center;
    gap: 50px;
`