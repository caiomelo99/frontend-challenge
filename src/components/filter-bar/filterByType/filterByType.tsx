import { useState } from "react"
import { FilterItem, FilterList } from "./styles"
import { useFilter } from "@/hooks/useFilter"
import { Filtertype } from "@/types/filterTypes"

export const FilterByType = () => {

    const {type, setType} = useFilter()
    const handleChangeType = (value: Filtertype) => {
        setType(value)
    }
    
    return (
        <div>
            <FilterList>
                <FilterItem onClick={() => handleChangeType(Filtertype.ALL)} selected={type === Filtertype.ALL}>todos os produtos</FilterItem>
                <FilterItem onClick={() => handleChangeType(Filtertype.SHIRT)} selected={type === Filtertype.SHIRT}>camisetas</FilterItem>
                <FilterItem onClick={() => handleChangeType(Filtertype.MUG)} selected={type === Filtertype.MUG}>canecas</FilterItem>
            </FilterList>
        </div>
    )
}