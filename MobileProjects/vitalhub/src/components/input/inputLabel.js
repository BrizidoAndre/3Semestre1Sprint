import { SmallInputLabelContainer } from "../container/style"
import { Label} from "../title/title"
import { BigInput, BigInputBlack, Input, InputBlack, SmallInput } from "./input"

export const InputLabelBlack = ({ title, placeholder, bigInput = false }) => {
    return (
        <>
            <Label>{title}</Label>
            {bigInput ?
                <BigInputBlack placeholder={placeholder} /> :
                <InputBlack placeholder={placeholder} />}
        </>
    )
}

export const InputLabel = ({ title, placeholder, bigInput = false }) => {
    return (
        <>
            <Label>{title}</Label>

            {bigInput ?
                <BigInput
                    multiline={true}
                    placeholder={placeholder} /> :
                <Input placeholder={placeholder} />
            }
        </>
    )
}

export const SmallInputLabel = ({ title, placeholder }) => {
    return (
        <SmallInputLabelContainer>
            <Label>{title}</Label>
            <InputBlack placeholder={placeholder} />
        </SmallInputLabelContainer>
    )
}

