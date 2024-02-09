import { SmallButton } from "../../components/button/button"
import { ButtonTitle } from "../../components/button/buttonTitle"
import { Container, InputContainer, TwoInputContainer } from "../../components/container/style"
import { HeaderImage } from "../../components/headerImage/headerImage"
import { InputLabel } from "../../components/input/inputLabel"
import { IconReturn } from "../../components/navigationIcons/navigationIcons"
import ScrollViewProfile from "../../components/scrollViewProfile/scrollViewProfile"
import { SubTitle, Title } from "../../components/title/title"
import EditAppointment from "./editAppointment"


const Appointment = ({navigation}) => {
    return (
        <Container>
            <IconReturn navigation={navigation} />

            <HeaderImage requireImage={require("../../assets/img/Rectangle425.png")} />

            <ScrollViewProfile>
                <Title>Richard Kosta</Title>
                <SubTitle>22 anos   richard.kosta@email.com</SubTitle>


                <Container>
                    <InputContainer>
                        <InputLabel bigInput={true} title={"Descrição da consulta"} placeholder={"Descrição"} />
                        <InputLabel title={"Diagnóstico do paciente"} placeholder={"Diagnóstico"} />
                        <InputLabel bigInput={true} title={"Preescrição Médica"} placeholder={"Preescrição Médica"} />
                    <TwoInputContainer>
                        <SmallButton><ButtonTitle>SALVAR</ButtonTitle></SmallButton>
                        <SmallButton onClick={() => {navigation.navigate("EditAppointment")}}><ButtonTitle>EDITAR</ButtonTitle></SmallButton>
                    </TwoInputContainer>
                    </InputContainer> 
                </Container>
            </ScrollViewProfile>

        </Container>
    )
}

export default Appointment