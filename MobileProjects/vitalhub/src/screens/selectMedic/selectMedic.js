import { Button } from "../../components/button/button"
import { ButtonTitle } from "../../components/button/buttonTitle"
import { ClinicCard, MedicCard } from "../../components/card/card"
import { FlatlistClinicCard, WithoutHeader } from "../../components/container/style"
import { LinkBlueSmall } from "../../components/links/links"
import { Title } from "../../components/title/title"

// import de imagens
import image from '../../assets/img/Rectangle425.png'


const SelectMedic = ({ navigation }) => {

    const rawData = [
        {
            name: 'Medico Sakamura',
            specialty: 'Cardiologist',
            image: image
        },
        {
            name: 'Medico Sakamura',
            specialty: 'Cardiologist',
            image: image
        },
        {
            name: 'Medico Sakamura',
            specialty: 'Cardiologist',
            image: image
        },
        {
            name: 'Medico Sakamura',
            specialty: 'Cardiologist',
            image: image
        },
        {
            name: 'Medico Sakamura',
            specialty: 'Cardiologist',
            image: image
        },
        {
            name: 'Medico Sakamura',
            specialty: 'Cardiologist',
            image: image
        },
        {
            name: 'Medico Sakamura',
            specialty: 'Cardiologist',
            image: image
        },
    ]

    return (
        <WithoutHeader>
            <Title>Selecionar Médico</Title>

            <FlatlistClinicCard
                data={rawData}
                renderItem={({ item }) =>
                    <MedicCard
                        image={item.image}
                        name={item.name}
                        specialty={item.specialty}
                    />}
            />


            <Button onPress={() => navigation.goBack()}><ButtonTitle>CONTINUAR</ButtonTitle></Button>
            <LinkBlueSmall onPress={() => navigation.goBack()}>Cancelar</LinkBlueSmall>
        </WithoutHeader >
    )
}

export default SelectMedic