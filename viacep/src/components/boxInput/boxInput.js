import { Input } from "../input/input"
import { InputContainer } from "../inputContainer/inputContainer"
import { Label } from "../labelinput/labelinput"

export const BoxInput = ({ 
    labelText, 
    placeholder, 
    value, 
    onChangeText = null, 
    onBlur, 
    keyboardType=null, 
    maxLength = null}) => {
    return (
        <>
            <InputContainer>
                <Label>{labelText}</Label>
                <Input
                    placeholder={placeholder}
                    value={value}
                    onChangeText={onChangeText}
                    onBlur={onBlur}
                    keyboardType={keyboardType}
                    maxLength={maxLength}/>
            </InputContainer>
        </>
    )
}