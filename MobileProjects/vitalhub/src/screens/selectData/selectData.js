import { useState } from "react"
import { Button } from "../../components/button/button"
import { ButtonTitle } from "../../components/button/buttonTitle"
import { AllCalendar } from "../../components/calendar/calendar"
import { InputContainer, WithoutHeader } from "../../components/container/style"
import { SelectLabel } from "../../components/input/inputLabel"
import { LinkBlueSmall } from "../../components/links/links"
import { Title } from "../../components/title/title"


const SelectData = () => {

    const [selected,setSelected] = useState(0)

    return (
        <WithoutHeader>
            
            <Title>Selecionar Data</Title>

            <InputContainer>
                
                <AllCalendar onPress={setSelected} selected={selected} />

                <SelectLabel placeholder={'Selecionar horário'} title={"Selecione um horário disponível"} />
            </InputContainer>

            <Button onPress={() => navigation.goBack()}><ButtonTitle>CONTINUAR</ButtonTitle></Button>
            <LinkBlueSmall onPress={() => navigation.goBack()}>Cancelar</LinkBlueSmall>
        </WithoutHeader>
    )
}


export default SelectData