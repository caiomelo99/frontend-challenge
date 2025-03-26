'use client'

import { FilterBar } from "@/components/filter-bar/filterBar"
import { MainContainer } from "./styles"
import { ProductsList } from "@/components/productsList/productsList"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"

const Page = () => {
  const client = new QueryClient()
  return (
    <QueryClientProvider client={client}>
      <MainContainer>
          <FilterBar/>
          <ProductsList/>
      </MainContainer>
    </QueryClientProvider>
    
    
  )
}

export default Page