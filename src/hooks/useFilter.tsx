import { FilterContext } from "@/context/filter-context"
import { useContext } from "react"

export const useFilter = () => {
    return useContext(FilterContext)
}