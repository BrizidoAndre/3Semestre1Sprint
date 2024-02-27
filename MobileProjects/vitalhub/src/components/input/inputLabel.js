import { SmallInputLabelContainer } from "../container/style"
import { IconWatch } from "../status/styles"
import { Label, Mont14600Green, Sand14600} from "../title/title"
import { BigInput, BigInputBlack, Input, InputBlack, Select, SmallInput } from "./input"

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

export const SelectLabel = ({ title, placeholder }) => {
    return (
        <>
            <Sand14600>{title}</Sand14600>

            <Select>
                <Mont14600Green>{placeholder}</Mont14600Green>
                <IconWatch source={require('../../assets/img/Arrow.png')} />
            </Select>
        </>
    )
}