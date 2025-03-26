import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons"
import { AreaIcon, InputArea, InputContainer, PrimaryInput } from "./styles"

type InputProps={
    value: string
    handleChange: (value: string) => void
}

export const AreaInput = (props: InputProps) => {

    return (
        <InputContainer>
            <InputArea>
                <PrimaryInput onChange={(e) => props.handleChange(e.target.value)} placeholder="Procurando por algo específico?"/>
                    <AreaIcon icon={faMagnifyingGlass}/>
            </InputArea>
        </InputContainer>
    )
}