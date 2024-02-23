import { useState } from "react";
import SelectClinic from "../../screens/selectClinic/selectClinic";
import { Button } from "../button/button";
import { ButtonTitle } from "../button/buttonTitle";
import { ModalContainer, RowContainer, Container, InputContainer } from "../container/style";
import { SmallInput } from "../input/input";
import { InputLabel } from "../input/inputLabel";
import { LinkBlueSmall } from "../links/links";
import { Label, Mont14600Green, Mont20600, Sand16500, Title } from "../title/title";
import { BottomModal, GrayBackground, ImageProfile, ModalCancel, ModalMedRecord, ModalMenu } from "./styles";
import { AppointmentButton } from "../navButton/navButton";


export const CancelAppointment = ({ hideModal = false, onPressCancel = null }) => {


    if (!hideModal) {
        return (<>
        </>)
    }
    return (
        <GrayBackground>
            <ModalCancel>
                <ModalContainer>
                    <Mont20600>Cancelar consulta</Mont20600>
                    <Sand16500>Ao cancelar essa consulta, abrirá uma possível disponibilidade no seu horário, deseja mesmo cancelar essa consulta?</Sand16500>
                    <Button onPress={onPressCancel}>
                        <ButtonTitle>CONFIRMAR</ButtonTitle>
                    </Button>
                    <LinkBlueSmall onPress={onPressCancel}>Cancelar</LinkBlueSmall>

                </ModalContainer>
            </ModalCancel>
        </GrayBackground>
    )
}

export const ShowRecord = ({ item = null, hideModal = false, onPressRecord = null, onPressNavigate = null }) => {

    if (!hideModal) {
        return (<>
        </>)
    }
    return (
        <GrayBackground>
            <ModalMedRecord>
                <ModalContainer>
                    <ImageProfile source={item.image} />
                    <Mont20600>{item.name}</Mont20600>
                    <RowContainer>
                        <Sand16500>{item.age} anos</Sand16500>
                        <Sand16500>{item.email}</Sand16500>
                    </RowContainer>
                    <Button onPress={onPressNavigate}>
                        <ButtonTitle>INSERIR PRONTUÁRIO</ButtonTitle>
                    </Button>
                    <LinkBlueSmall onPress={onPressRecord}>Cancelar</LinkBlueSmall>

                </ModalContainer>
            </ModalMedRecord>
        </GrayBackground>
    )
}


export const CreateAppointment = ({ hideModal, onPressCancel, navigation }) => {

   



    if (!hideModal) {
        return (
            <></>
        )
    }


    return (
        <GrayBackground>
            <BottomModal>
                <Container>
                    <Title>Agendar Consulta</Title>
                    <InputContainer>
                        <AppointmentLevel  />

                        <InputLabel 
                        title={'Informe a localização desejada'} 
                        placeholder={"Ex: São Paulo"} />
                    </InputContainer>

                    <Button onPress={() => navigation.navigate("SelectClinic")}><ButtonTitle>CONTINUAR</ButtonTitle></Button>
                    <LinkBlueSmall onPress={onPressCancel}>Cancelar</LinkBlueSmall>
                </Container>

            </BottomModal>
        </GrayBackground>
    )
}

export const AppointmentLevel = ({selectedInput = null }) => {

    const [appointmentLevel, setAppointmentLevel] = useState({
        exam:false,
        urgent:false,
        routine:false
    })

    return (
        <>
            <Label>Qual o nível da consulta</Label>
            <RowContainer>
                <AppointmentButton 
                selected={appointmentLevel.routine} 
                buttonTitle={'Rotina'}
                onPress={() => setAppointmentLevel({routine:true})}/>

                <AppointmentButton 
                selected={appointmentLevel.exam} 
                buttonTitle={'Exame'}
                onPress={() => setAppointmentLevel({exam:true})}/>

                <AppointmentButton 
                selected={appointmentLevel.urgent} 
                buttonTitle={'Urgência'}
                onPress={() => setAppointmentLevel({urgent:true})}/>
            </RowContainer>
        </>
    )
}