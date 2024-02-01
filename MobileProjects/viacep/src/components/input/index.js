import { InputE } from "./style";

export function InputEx({
    placeholder,
    editable,
    fieldValue,
    onchangeText,
    KeyType,
    maxLenght
}) {
    return (
        <>
            <InputE
                placeholder={placeholder}
                editable={editable}
                keyboardType={KeyType}
                maxLenght={maxLenght}
                value = {fieldValue}
                onchangeText = {onchangeText}

            />
        </>
    )
}