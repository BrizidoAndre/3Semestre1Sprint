import { Text, TextInput } from "react-native"
import { FieldContent } from "./style"
import { LabelEx } from "../labelinput"

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
            <InputEx 
            placeholder={placeholder}
            editabel={editable}
            KeyType={KeyType}
            maxLenght={maxLenght}
            fieldValue={fieldValue}
            onChangeText={onChangeText}
            />
            <TextInput />
        </FieldContent>
)}