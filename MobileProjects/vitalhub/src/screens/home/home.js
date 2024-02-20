// Import de imagens
import image from "../../assets/img/Rectangle425.png"

// Import do react
import { useEffect, useState } from "react"
import { FlatlistContainer, HomeContainer, RowContainer } from "../../components/container/style"
import { NavButtonComponent } from "../../components/navButton/navButton"
import { ScrollView } from "react-native"
import Header from "../../components/header/header"
import Card from "../../components/card/card"
import { CancelAppointment, ShowRecord } from "../../components/modalActions/modalActions"

const Home = () => {

    const [selected, setSelected] = useState({
        agendadas: true,
        realizadas: false,
        canceladas: false,
    });
    const [modalCancel, setModalCancel] = useState(false);
    const [modalRecord, setModalRecord] = useState(false);
    const [objModalRecord, setObjModalRecord] = useState({})

    const rawData = [
        {
            id: "imasdf",
            name:'Richard Rasmussem',
            age:22,
            image: image,
            email:'emaildoe@email.com',
            time: "14:00",
            status: "a"
        },
        {
            id: "imasdfasdf",
            name:'Clone do Richard',
            age:22,
            image: image,
            email:'emaildoe@email.com',
            time: "22:00",
            status: "r"
        },
        {
            id: "imasdfasdfasd",
            name:'Richard Rasmussem',
            age:22,
            image: image,
            email:'emaildoe@email.com',
            time: "14:00",
            status: "c"
        },
        {
            id: "imasdfasdfasdas",
            name:'Clone do clone do Richard',
            age:22,
            image: image,
            email:'emaildoe@email.com',
            time: "14:00",
            status: "r"
        },
        {
            id: "imasdfasdffsad",
            name:'Richard Rasmussem',
            age:22,
            image: image,
            email:'emaildoe@email.com',
            time: "14:00",
            status: "r"
        },
        {
            id: "imasdfasdfdsasd",
            name:'Richard Rasmussem',
            age:22,
            image: image,
            email:'emaildoe@email.com',
            time: "14:00",
            status: "a"
        },
        {
            id: "imasdfasdfgasd",
            name:'Richard Rasmussem',
            age:22,
            image: image,
            email:'emaildoe@email.com',
            time: "14:00",
            status: "a"
        },
        {
            id: "imasdfasdfqwer",
            name:'Richard Rasmussem',
            age:22,
            image: image,
            email:'emaildoe@email.com',
            time: "14:00",
            status: "a"
        },
    ]
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
        if(obj.status === "a"){
            setModalCancel(true)
        }
        if(obj.status === 'r'){
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

            <CancelAppointment hideModal={modalCancel} onPressCancel={() => setModalCancel(false)} />

            <ShowRecord item={objModalRecord} hideModal={modalRecord} onPressRecord={() => setModalRecord(false)} />

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
                        onPress={() => showRightModal(item) }/>}
                keyExtractor={item => { item.id }} />


        </>
    )
}

export default Home