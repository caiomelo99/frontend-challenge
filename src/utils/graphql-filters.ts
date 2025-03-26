import { Filtertype } from "@/types/filterTypes";
import { PriorityTypes } from "@/types/priorityTypes";

export const getCategoryByType = (type: Filtertype) => {
    if(type == Filtertype.MUG) return 'mugs'
    if(type == Filtertype.SHIRT) return 't-shirts'
    return ''
}

export const getFieldByPriority = (priority: PriorityTypes) => {
    if(priority == PriorityTypes.NEWS) return {field:'created_at', order:'ASC'}
    if(priority == PriorityTypes.BIGGEST_PRICE) return {field:'price_in_cents', order:'ASC'}
    if(priority == PriorityTypes.MINOR_PRICE) return {field:'price_in_cents', order:'DSC'}
    return {field:'sales', order:'DSC'}
}

export const mountQuery = (type: Filtertype, priority: PriorityTypes) => {
    if(type === Filtertype.ALL && priority == PriorityTypes.POPULARITY) return  `
    query {
        allProducts {
            id
            name
            price_in_cents
            image_url
        }
    }
` 
    const sortSettings = getFieldByPriority(priority)
    const categoryFilter = getCategoryByType(type)

    return `
         
        query {
            allProducts(sortField: "${sortSettings.field}", sortOrder: "${sortSettings.order}", ${categoryFilter ? `filter: {category: "${categoryFilter}"}`: ''}) {
                id
                name
                price_in_cents
                image_url
            }
        }
    
    `
}