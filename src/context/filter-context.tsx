'use client'

import { Filtertype } from "@/types/filterTypes";
import { PriorityTypes } from "@/types/priorityTypes";
import { createContext, ReactNode, useState } from "react";

type ProviderProps = {
    children: ReactNode
}

export const FilterContext = createContext({
    search: '',
    page: 0,
    type: Filtertype.ALL,
    priority: PriorityTypes.NEWS,
    setPriority: (value: PriorityTypes) => {},
    setSearch: (value: string) => {},
    setPage: (value: number) => {},
    setType: (value: Filtertype) => {}
})

export const FilterContextProvider = ({children}:ProviderProps) => {
    const [search, setSearch] = useState('')
    const [page, setPage] = useState(0)
    const [type, setType] = useState(Filtertype.ALL)
    const [priority, setPriority] = useState(PriorityTypes.POPULARITY)

    return (
        <FilterContext.Provider value={{search, page, type, priority, setSearch, setPage, setType, setPriority}}>
            {children}
        </FilterContext.Provider>
    )
}