import { faBagShopping } from "@fortawesome/free-solid-svg-icons"
import { CartArea, CartCount, CartIcon } from "./styles"
import { UseLocalStorage } from "@/hooks/useLocalStorage"

export const Cart = () => {
    const value = UseLocalStorage()
    
    return (
        <CartArea>
            <CartIcon icon={faBagShopping}/>
            {value?.length > 0 && <CartCount>{value?.length}</CartCount>}
        </CartArea>
    )
}