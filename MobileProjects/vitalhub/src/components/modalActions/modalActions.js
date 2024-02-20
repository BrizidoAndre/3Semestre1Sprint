import { Button } from "../button/button";
import { ButtonTitle } from "../button/buttonTitle";
import { ModalContainer, RowContainer } from "../container/style";
import { LinkBlueSmall } from "../links/links";
import { Mont20600, Sand16500, Title } from "../title/title";
import { GrayBackground, ImageProfile, ModalCancel, ModalMedRecord, ModalMenu } from "./styles";


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

export const ShowRecord = ({ item=null, hideModal = true, onPressRecord = null }) => {

    if (!hideModal) {
        return (<>
        </>)
    }
    return (
        <GrayBackground>
            <ModalMedRecord>
                <ModalContainer>
                    <ImageProfile source={item.image}/>
                    <Mont20600>{item.name}</Mont20600>
                    <RowContainer>
                        <Sand16500>{item.age} anos</Sand16500>
                        <Sand16500>{item.email}</Sand16500>
                    </RowContainer>
                    <Button onPress={onPressRecord}>
                        <ButtonTitle>INSERIR PRONTUÁRIO</ButtonTitle>
                    </Button>
                    <LinkBlueSmall onPress={onPressRecord}>Cancelar</LinkBlueSmall>

                </ModalContainer>
            </ModalMedRecord>
        </GrayBackground>
    )
}
