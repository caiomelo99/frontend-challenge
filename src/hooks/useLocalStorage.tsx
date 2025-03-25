import { useEffect, useState } from "react"

export const UseLocalStorage = () => {

   const [value, setValue] = useState<any[]>([])

   useEffect(() => {

    const checkLocalStorage = () => {
        const cart = localStorage.getItem('cart')
        if(cart) {
            try {
                const parsed = JSON.parse(cart)
                setValue(Array.isArray(parsed) ? parsed : [])
            } catch {
                setValue([])
            }
        } else {
            setValue([])
        }
    }

    checkLocalStorage()
    window.addEventListener('storage', checkLocalStorage)
    return () => window.removeEventListener("storage", checkLocalStorage)

   }, [])

   return value
}