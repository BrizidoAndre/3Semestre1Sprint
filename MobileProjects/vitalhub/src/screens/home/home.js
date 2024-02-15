import { useState } from "react"
import { NavButtonTitle } from "../../components/button/buttonTitle"
import { Container, RowContainer } from "../../components/container/style"
import Header from "../../components/header/header"
import { NavButtonComponent } from "../../components/navButton/navButton"
import { Title } from "../../components/title/title"

const Home = () => {

    const [selected, setSelected] = useState({
        agendadas:true,
        realizadas:false,
        canceladas:false,
    });


    return (
        <>
            <Header profileName="Richard Rasmussen" />
            <Container>
                <RowContainer>
                    <NavButtonComponent onPress={() => {setSelected({agendadas: true}) }} selected={selected.agendadas} buttonTitle={'Agendadas'} />
                    <NavButtonComponent onPress={() => {setSelected({realizadas: true}) }} selected={selected.realizadas} buttonTitle={'Realizadas'} />
                    <NavButtonComponent onPress={() => {setSelected({canceladas: true}) }} selected={selected.canceladas} buttonTitle={'Canceladas'} />
                </RowContainer>
            </Container>
        </>
    )
}

export default Home