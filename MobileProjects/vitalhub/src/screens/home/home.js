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
    const [modal, setModal] = useState({
        cancel: false,
        record: false,
        setAppointment: false,
    })
    // Use state para 
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
            id: "imasdfd",
            name: 'Richard Rasmussem',
            age: 22,
            nivel: 'Urgencia',
            image: image,
            email: 'emaildoe@email.com',
            time: "14:00",
            status: "r"
        },
        {
            id: "imasdfs",
            name: 'Richard Rasmussem',
            age: 22,
            nivel: 'Exame',
            image: image,
            email: 'emaildoe@email.com',
            time: "14:00",
            status: "r"
        },
        {
            id: "imasdfasd",
            name: 'Richard Rasmussem',
            age: 22,
            nivel: 'Exame',
            image: image,
            email: 'emaildoe@email.com',
            time: "14:00",
            status: "a"
        },
        {
            id: "imasdfqwe",
            name: 'Richard Rasmussem',
            age: 22,
            nivel: 'Exame',
            image: image,
            email: 'emaildoe@email.com',
            time: "14:00",
            status: "c"
        },
        {
            id: "imasdfzxc",
            name: 'Richard Rasmussem',
            age: 22,
            nivel: 'Urgencia',
            image: image,
            email: 'emaildoe@email.com',
            time: "14:00",
            status: "c"
        },
        {
            id: "imasdffghhg",
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
            setModal({cancel:true})
        }
        if (obj.status === 'r') {
            setModal({record:true})
            
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
                        name={item.name}
                        age={item.age}
                        image={item.image}
                        status={item.status}
                        time={item.time}
                        nivel={item.nivel}
                        onPress={() => showRightModal(item)} />}/>

            <CancelAppointment
                hideModal={modal.cancel}
                onPressCancel={() => setModal({cancel: false})}
            />

            <ShowRecord
                item={objModalRecord}
                hideModal={modal.record}
                onPressRecord={() => {setModal({record: false})}}
                onPressNavigate={() => { navigation.navigate(Appointment) }}
            />

            <CreateAppointment
                hideModal={modal.setAppointment}
                onPressCancel={() => setModal({setAppointment: false})}
                navigation={navigation}/>





            <Stethoscope onPress={() => { setModal({setAppointment:true}) }} />


        </>
    )
}

export default Home