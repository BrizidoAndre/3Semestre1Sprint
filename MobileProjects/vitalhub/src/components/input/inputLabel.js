import { FlatList } from "react-native"
import { SmallInputLabelContainer } from "../container/style"
import { IconWatch } from "../status/styles"
import { Label, Mont14600Green, Sand14600 } from "../title/title"
import { BigInput, BigInputBlack, FlatListSelect, Input, InputBlack, Select, SelectRow, SmallInput } from "./input"

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

export const SelectLabel = ({ title, placeholder, item, hideSelect, setHideSelect, onPress }) => {
    return (
        <>
            <Sand14600>{title}</Sand14600>

            <Select onPress={setHideSelect}>
                <Mont14600Green>{placeholder}</Mont14600Green>
                <IconWatch source={require('../../assets/img/Arrow.png')} />
                <SelectModal item={item} hideSelect={hideSelect} onPress={onPress} setHideSelect={setHideSelect} />
            </Select>
        </>
    )
}

export const SelectCard = ({time, onPress, setHideSelect}) => {
    
    return(
        <SelectRow onPress={() => {onPress(time); setHideSelect(false)}}>
            <Mont14600Green>{time}</Mont14600Green>
        </SelectRow>
    )
}

export const SelectModal = ({ item, hideSelect, onPress, setHideSelect }) => {

    if(!hideSelect){
        return(
            <></>
        )
    }
    return (
        <FlatListSelect
            data={item}
            renderItem={ ({item}) => <SelectCard onPress={onPress} setHideSelect={setHideSelect} time={item} /> }
        />
    )
}