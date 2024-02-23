import { Button } from "../../components/button/button"
import { ButtonTitle } from "../../components/button/buttonTitle"
import { ClinicCard } from "../../components/card/card"
import { FlatlistClinicCard, WithoutHeader } from "../../components/container/style"
import { LinkBlueSmall } from "../../components/links/links"
import { Title } from "../../components/title/title"


const SelectMedic = ({navigation}) => {

    const rawData = [
        {
            name: 'Senai Paulo Skaf',
            location: 'São Caetano do Sul, SP',
            time: 'Seg-Sex',
            grade: "4.5"
        },
        {
            name: 'Senai Paulo Skaf',
            location: 'São Caetano do Sul, SP',
            time: 'Seg-Sex',
            grade: "4.5"
        },
        {
            name: 'Senai Paulo Skaf',
            location: 'São Caetano do Sul, SP',
            time: 'Seg-Sex',
            grade: "4.5"
        },
        {
            name: 'Senai Paulo Skaf',
            location: 'São Caetano do Sul, SP',
            time: 'Seg-Sex',
            grade: "4.5"
        },
        {
            name: 'Senai Paulo Skaf',
            location: 'São Caetano do Sul, SP',
            time: 'Seg-Sex',
            grade: "4.5"
        },
        {
            name: 'Senai Paulo Skaf',
            location: 'São Caetano do Sul, SP',
            time: 'Seg-Sex',
            grade: "4.5"
        },
        {
            name: 'Senai Paulo Skaf',
            location: 'São Caetano do Sul, SP',
            time: 'Seg-Sex',
            grade: "4.5"
        },
        {
            name: 'Senai Paulo Skaf',
            location: 'São Caetano do Sul, SP',
            time: 'Seg-Sex',
            grade: "4.5"
        },
    ]

    return(
        <WithoutHeader>
            <Title>Selecionar Médico</Title>

            <FlatlistClinicCard
                data={rawData}
                renderItem={({ item }) =>
                    <ClinicCard
                        grade={item.grade}
                        location={item.location}
                        name={item.name}
                        time={item.time} />}
            />


            <Button onPress={() => navigation.goBack()}><ButtonTitle>CONTINUAR</ButtonTitle></Button>
            <LinkBlueSmall>Cancelar</LinkBlueSmall>
        </WithoutHeader >
    )
}

export default SelectMedic