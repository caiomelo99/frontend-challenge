'use client'

import { Saira_Stencil_One } from "next/font/google"
import { AreaIcon, Logo, PrimaryInput, TagHeader, AreaInput, RightSide} from "./styles"
import {  faBagShopping, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons"
import { Cart } from "./cart/cart"

export const sairaStencial = Saira_Stencil_One({
    weight: ['400'],
    subsets: ['latin']
  })
export const Header = () => {
    return (
        <TagHeader>
            <Logo className={sairaStencial.className}>Capputeeno</Logo>
            <RightSide>
            <AreaInput>
                <PrimaryInput placeholder="Procurando por algo específico?"/>
                <AreaIcon icon={faMagnifyingGlass}/>
            </AreaInput>
            <Cart/>
            </RightSide>
        </TagHeader>
    )
}