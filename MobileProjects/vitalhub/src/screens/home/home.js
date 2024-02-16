import { useState } from "react"
import { NavButtonTitle } from "../../components/button/buttonTitle"
import { Container, HomeContainer, InputContainer, RowContainer, Scroll } from "../../components/container/style"
import Header from "../../components/header/header"
import { NavButtonComponent } from "../../components/navButton/navButton"
import { Title } from "../../components/title/title"
import { ScrollView } from "react-native"
import Card from "../../components/card/card"

import image from "../../assets/img/Rectangle425.png"

const Home = () => {

    const [selected, setSelected] = useState({
        agendadas: true,
        realizadas: false,
        canceladas: false,
    });



    return (
        <>
            <Header profileName="Richard Rasmussen" />
            <HomeContainer>
                <ScrollView horizontal={true}>
                    <RowContainer>
                    </RowContainer>
                </ScrollView>

                <RowContainer>
                    <NavButtonComponent onPress={() => { setSelected({ agendadas: true }) }} selected={selected.agendadas} buttonTitle={'Agendadas'} />
                    <NavButtonComponent onPress={() => { setSelected({ realizadas: true }) }} selected={selected.realizadas} buttonTitle={'Realizadas'} />
                    <NavButtonComponent onPress={() => { setSelected({ canceladas: true }) }} selected={selected.canceladas} buttonTitle={'Canceladas'} />
                </RowContainer>

                <Scroll>
                    <Container>
                        <Card image={image} time={"14:00"} status={"c"} />
                        <Card image={image} time={"14:00"} status={"c"} />
                        <Card image={image} time={"14:00"} status={"c"} />
                        <Card image={image} time={"14:00"} status={"c"} />
                        <Card image={image} time={"14:00"} status={"c"} />
                        <Card image={image} time={"14:00"} status={"c"} />
                        <Card image={image} time={"14:00"} status={"c"} />
                        <Card image={image} time={"14:00"} status={"c"} />
                        <Card image={image} time={"14:00"} status={"c"} />
                        <Card image={image} time={"14:00"} status={"c"} />
                        <Card image={image} time={"14:00"} status={"c"} />
                        <Card image={image} time={"14:00"} status={"c"} />
                        <Card image={image} time={"14:00"} status={"c"} />
                        <Card image={image} time={"14:00"} status={"c"} />
                    </Container>
                </Scroll>

            </HomeContainer>
        </>
    )
}

export default Home