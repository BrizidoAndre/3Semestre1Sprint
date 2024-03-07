import { FieldContent } from "./style"
import { LabelEx } from "../labelinput"
import { InputEx } from "../input/index"

export const BoxInput = ({
    fieldWidth = 100,
    editable = false,
    textLabel,
    placeholder,
    fieldValue = null,
    onChangeText = null,
    KeyType = 'default',
    maxLenght

}) => {
    return(
        <FieldContent>
            {/* label */}
            <LabelEx  
            textLabel={textLabel}/>

            {/* input */}
            <InputEx 
            placeholder={placeholder}
            editable={editable}
            Keytype={KeyType}
            maxLenght={maxLenght}
            fieldValue={fieldValue}
            onChangeText={onChangeText}
            />
        </FieldContent>
)}