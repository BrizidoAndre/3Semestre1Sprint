import { Button, SmallButtonGreen, SmallButtonTransparentContainer } from "../../components/button/button"
import { ButtonTitle } from "../../components/button/buttonTitle"
import { Container, InputContainer, RowAlign, RowFullContainer } from "../../components/container/style"
import { HeaderImage } from "../../components/headerImage/headerImage"
import { BigInputBlack } from "../../components/input/input"
import { InputLabelBlack, InputLabelImageBlack } from "../../components/input/inputLabel"
import { IconReturn } from "../../components/navigationIcons/navigationIcons"
import ScrollViewProfile from "../../components/scrollViewProfile/scrollViewProfile"
import { Mont12500Red, Mont14600White, Sand14500Gray, SubTitle, Title } from "../../components/title/title"
import { IconCamera, Line, LinkReturn } from "./styles"

import camera from '../../assets/img/mdi_camera-plus-outline.png'


// VARIÁVEL NA PÁGINA PARA VERIFICAR SE O USUÁRIO É MÉDICO OU NÃO
const Appointment = ({ navigation, medic=true }) => {
    return (
        <Container>
            {!medic ?
                <>
                    <IconReturn navigation={navigation} />

                    <HeaderImage requireImage={require("../../assets/img/Rectangle425.png")} />

                    <ScrollViewProfile>
                        <Container>
                            <Title>Dr. Clone Richard</Title>
                            <Sand14500Gray>Clinico Geral    CRM-15647</Sand14500Gray>


                            <InputContainer>
                                <InputLabelBlack
                                    bigInput={true}
                                    title={"Descrição da consulta"}
                                    placeholder={"Descrição"} />

                                <InputLabelBlack
                                    title={"Diagnóstico do paciente"}
                                    placeholder={"Diagnóstico"} />

                                <InputLabelBlack
                                    bigInput={true}
                                    title={"Preescrição Médica"}
                                    placeholder={"Preescrição Médica"} />

                                <InputLabelImageBlack
                                    title={"Exames médicos"} />

                                <RowFullContainer>
                                    <SmallButtonGreen>
                                        <RowAlign>
                                            <IconCamera source={camera} />
                                            <Mont14600White>Enviar</Mont14600White>
                                        </RowAlign>
                                    </SmallButtonGreen>
                                    <SmallButtonTransparentContainer >
                                        <Mont12500Red>Cancelar</Mont12500Red>
                                    </SmallButtonTransparentContainer>
                                </RowFullContainer>

                                <Line />

                                <BigInputBlack />
                            </InputContainer>


                            <LinkReturn onPress={()=>{navigation.goBack()}}>Voltar</LinkReturn>
                        </Container>
                    </ScrollViewProfile>
                </>
                :
                <>

                    <IconReturn navigation={navigation} />

                    <HeaderImage requireImage={require("../../assets/img/Rectangle425.png")} />

                    <ScrollViewProfile>
                        <Title>Richard Kosta</Title>
                        <SubTitle>22 anos   richard.kosta@email.com</SubTitle>


                        <Container>
                            <InputContainer>
                                <InputLabelBlack bigInput={true} title={"Descrição da consulta"} placeholder={"Descrição"} />
                                <InputLabelBlack title={"Diagnóstico do paciente"} placeholder={"Diagnóstico"} />
                                <InputLabelBlack bigInput={true} title={"Preescrição Médica"} placeholder={"Preescrição Médica"} />

                            </InputContainer>

                            <Button onPress={() => { navigation.navigate("EditAppointment") }}><ButtonTitle>EDITAR</ButtonTitle></Button>
                        </Container>
                    </ScrollViewProfile>
                </>

            }


        </Container>
    )
}

export default Appointment