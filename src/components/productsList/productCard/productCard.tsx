import { formatValue } from "@/utils/formatValue"
import { Card } from "./styles"

type ProductCardProps = {
    image: string
    title: string
    price: number
}

export const ProductCard = (props : ProductCardProps) => {
    const price = formatValue(props.price)
    return (
        <Card>
            <img src={props.image} alt={props.title} />
            <div>
                <h3>{props.title}</h3>
                <div></div>
                <p>{price}</p>
            </div>
            
        </Card>
    )
}