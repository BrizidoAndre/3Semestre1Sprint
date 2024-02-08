import { InputContainer, LabelInputContainer, SmallInputLabelContainer } from "../container/style"
import { Label, Title } from "../title/title"
import { Input, InputBlack } from "./input"

export const InputLabel = ({ title, placeholder }) => {
    return (
        <>
            <Label>{title}</Label>
            <InputBlack placeholder={placeholder} />
        </>
    )
}

export const SmallInputLabel = ({title, placeholder}) => {
    return(
        <SmallInputLabelContainer>
            <Label>{title}</Label>
            <InputBlack placeholder={placeholder} />
        </SmallInputLabelContainer>
    )
}