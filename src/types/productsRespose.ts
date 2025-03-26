import { Product } from "./product"

export type ProductFetchResponse = {
    data: {
        allProducts: Product[]
    }
}