'use client'

import { Saira_Stencil_One } from "next/font/google"
import { Logo, TagHeader, RightSide, HeaderContainer} from "./styles"

import { Cart } from "./cart/cart"
import { AreaInput } from "./areaInput/areaInput"
import { useFilter } from "@/hooks/useFilter"

export const sairaStencial = Saira_Stencil_One({
    weight: ['400'],
    subsets: ['latin']
  })
export const Header = () => {

    const {search, setSearch} = useFilter()

    return (
        <TagHeader>
            <HeaderContainer>
            <Logo className={sairaStencial.className}>Capputeeno</Logo>
            <RightSide>
                <AreaInput value={search} handleChange={setSearch}/>
                <Cart/>
            </RightSide>
            </HeaderContainer>
        </TagHeader>
    )
}