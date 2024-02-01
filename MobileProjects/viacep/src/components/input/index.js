export function Input({
    placeholder,
    editable,
    fieldValue,
    onchangeText,
    KeyType,
    maxLenght
}) {
    return (
        <>
            <InputText
                placeholder={placeholder}
                editable={editable}
                keyboardType={KeyType}
                maxLenght={maxLenght}
            />
        </>
    )
}