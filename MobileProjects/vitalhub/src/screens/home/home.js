// Import de imagens
import image from "../../assets/img/Rectangle425.png"

// Import do react
import { useEffect, useState } from "react"
import { FlatlistContainer, HomeContainer, RowContainer } from "../../components/container/style"
import { NavButtonComponent } from "../../components/navButton/navButton"
import { ScrollView } from "react-native"
import Header from "../../components/header/header"
import Card from "../../components/card/card"
import { CancelAppointment, CreateAppointment, ShowRecord } from "../../components/modalActions/modalActions"
import Appointment from "../appointment/appointment"
import Stethoscope from "../../components/stethoscope/stethoscope"

const Home = ({ navigation }) => {

    // use states para os input de onPress
    const [selected, setSelected] = useState({
        agendadas: true,
        realizadas: false,
        canceladas: false,
    });

    // Use states para os modais
    const [modalCancel, setModalCancel] = useState(false);
    const [modalRecord, setModalRecord] = useState(false);
    const [modalSetAppointment, setModalSetAppointment] = useState(false);
    const [objModalRecord, setObjModalRecord] = useState({})


    // Dados mocados para teste do flatlist
    const rawData = [
        {
            id: "imasdf",
            name: 'Richard Rasmussem',
            age: 22,
            nivel: 'Rotina',
            image: image,
            email: 'emaildoe@email.com',
            time: "14:00",
            status: "a"
        },
        {
            id: "imasdf",
            name: 'Richard Rasmussem',
            age: 22,
            nivel: 'Urgencia',
            image: image,
            email: 'emaildoe@email.com',
            time: "14:00",
            status: "r"
        },
        {
            id: "imasdf",
            name: 'Richard Rasmussem',
            age: 22,
            nivel: 'Exame',
            image: image,
            email: 'emaildoe@email.com',
            time: "14:00",
            status: "r"
        },
        {
            id: "imasdf",
            name: 'Richard Rasmussem',
            age: 22,
            nivel: 'Exame',
            image: image,
            email: 'emaildoe@email.com',
            time: "14:00",
            status: "a"
        },
        {
            id: "imasdf",
            name: 'Richard Rasmussem',
            age: 22,
            nivel: 'Exame',
            image: image,
            email: 'emaildoe@email.com',
            time: "14:00",
            status: "c"
        },
        {
            id: "imasdf",
            name: 'Richard Rasmussem',
            age: 22,
            nivel: 'Urgencia',
            image: image,
            email: 'emaildoe@email.com',
            time: "14:00",
            status: "c"
        },
        {
            id: "imasdf",
            name: 'Richard Rasmussem',
            age: 22,
            nivel: 'Rotina',
            image: image,
            email: 'emaildoe@email.com',
            time: "14:00",
            status: "a"
        },
    ]

    // função de filtragem 
    const checkStatus = (data) => {
        if (data.status === "a" && selected.agendadas === true) {
            return data
        }
        else if (data.status === "r" && selected.realizadas === true) {
            return data
        }
        else if (data.status === "c" && selected.canceladas === true) {
            return data
        }
    }
    const data = rawData.filter(checkStatus)

    const showRightModal = (obj) => {
        if (obj.status === "a") {
            setModalCancel(true)
        }
        if (obj.status === 'r') {
            setModalRecord(true)
            setObjModalRecord(obj)
        }
    }















    return (
        <>
            <Header profileName="Richard Rasmussen" />
            <HomeContainer>
                <ScrollView horizontal={true}>
                    <RowContainer>
                    </RowContainer>
                </ScrollView>

                <RowContainer>
                    <NavButtonComponent
                        onPress={() => { setSelected({ agendadas: true }) }}
                        selected={selected.agendadas}
                        buttonTitle={'Agendadas'} />
                    <NavButtonComponent
                        onPress={() => { setSelected({ realizadas: true }) }}
                        selected={selected.realizadas}
                        buttonTitle={'Realizadas'} />
                    <NavButtonComponent
                        onPress={() => { setSelected({ canceladas: true }) }}
                        selected={selected.canceladas}
                        buttonTitle={'Canceladas'} />
                </RowContainer>
            </HomeContainer>



            <FlatlistContainer
                data={data}
                renderItem={({ item }) =>
                    <Card
                        key={Math.random()}
                        name={item.name}
                        age={item.age}
                        image={item.image}
                        status={item.status}
                        time={item.time}
                        nivel={item.nivel}
                        onPress={() => showRightModal(item)} />}
                keyExtractor={() => { Math.random() }} />

            <CancelAppointment
                hideModal={modalCancel}
                onPressCancel={() => setModalCancel(false)}
            />

            <ShowRecord
                item={objModalRecord}
                hideModal={modalRecord}
                onPressRecord={() => { setModalRecord(false) }}
                onPressNavigate={() => { navigation.navigate(Appointment) }}
            />

            <CreateAppointment hideModal={modalSetAppointment} onPressCancel={() => setModalSetAppointment(false)} />





            <Stethoscope onPress={() => { setModalSetAppointment(true) }} />


        </>
    )
}

export default Home