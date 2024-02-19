// Import de imagens
import image from "../../assets/img/Rectangle425.png"

// Import do react
import { useState } from "react"
import { FlatlistContainer, HomeContainer, RowContainer } from "../../components/container/style"
import { NavButtonComponent } from "../../components/navButton/navButton"
import { ScrollView } from "react-native"
import Header from "../../components/header/header"
import Card from "../../components/card/card"
import Stethoscope from "../../components/stethoscope/stethoscope"
import ToastUp from "../../components/toastUp/toastUp"

const Home = () => {

    const [selected, setSelected] = useState({
        agendadas: true,
        realizadas: false,
        canceladas: false,
    });

    const rawData = [
        {
            id: "imasdf",
            image: image,
            time: "14:00",
            status: "a"
        },
        {
            id: "imasdfasdf",
            image: image,
            time: "22:00",
            status: "r"
        },
        {
            id: "imasdfasdfasd",
            image: image,
            time: "14:00",
            status: "c"
        },
        {
            id: "imasdfasdfasdas",
            image: image,
            time: "14:00",
            status: "r"
        },
        {
            id: "imasdfasdffsad",
            image: image,
            time: "14:00",
            status: "r"
        },
        {
            id: "imasdfasdfdsasd",
            image: image,
            time: "14:00",
            status: "a"
        },
        {
            id: "imasdfasdfgasd",
            image: image,
            time: "14:00",
            status: "a"
        },
        {
            id: "imasdfasdfqwer",
            image: image,
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
                        image={item.image}
                        status={item.status}
                        time={item.time} />}
                keyExtractor={item => { item.id }} />

            <Stethoscope />
 
        </>
    )
}

export default Home