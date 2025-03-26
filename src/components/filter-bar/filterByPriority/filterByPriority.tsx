import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { FilterContainer, FilterIcon, PriorityFilter } from "./styles"
import { faArrowDown } from "@fortawesome/free-solid-svg-icons"
import { useState } from "react"
import { useFilter } from "@/hooks/useFilter"
import { PriorityTypes } from "@/types/priorityTypes"

export const FilterByPriority = () => {
    const {setPriority} = useFilter()
    const [isOpen, setIsOpen] = useState(false)

    const handleUpdatePriority = (value: PriorityTypes) => {
        setPriority(value)
        setIsOpen(!isOpen)
    }
    const handleOpen = () => {
        setIsOpen(!isOpen)
    }
    return (
       <FilterContainer>
            <button onClick={handleOpen}>Organizar por <FilterIcon icon={faArrowDown}/></button>
            {isOpen && 
                <PriorityFilter>
                    <li onClick={() => handleUpdatePriority(PriorityTypes.NEWS)}>Novidades</li>
                    <li onClick={() => handleUpdatePriority(PriorityTypes.BIGGEST_PRICE)}>Preço: Maior - menor</li>
                    <li onClick={() => handleUpdatePriority(PriorityTypes.MINOR_PRICE)}>Preço: Menor - maior</li>
                    <li onClick={() => handleUpdatePriority(PriorityTypes.POPULARITY)}>Mais vendido</li>
                </PriorityFilter>
            }
       </FilterContainer>
    )
}