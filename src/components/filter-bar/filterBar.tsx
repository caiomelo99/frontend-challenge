'use client'

import { FilterByPriority } from "./filterByPriority/filterByPriority"
import { FilterByType } from "./filterByType/filterByType"
import { FilterContainer } from "./styles"

export const FilterBar = () => {

    return (
            <FilterContainer>
                <FilterByType/>
                <FilterByPriority/>
            </FilterContainer>
    )
}