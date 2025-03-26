'use client'

import { useProducts } from "@/hooks/useProducts"

type ProductsListProps = {

}

export const ProductsList = (props: ProductsListProps) => {
    const {data} = useProducts()
    console.log(data)
    return (
        <div>

        </div>
    )
}