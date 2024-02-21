import { TouchableOpacity } from "react-native"
import { Center, Container, RowContainer } from "../container/style"
import { NavButtonComponent } from "../navButton/navButton"
import Status, { StatusGray, StatusGreen } from "../status/status"
import { Mont12500Blue, Mont12500Red, Mont16600, Sand14400, SubTitle } from "../title/title"
import { CardBox, ImageCard, RowCardBox, TextCardBox } from "./styles"

const Card = ({ name, age, image, nivel, time="14:00", status="c", onPress=null }) => {

    const statusCheck = () => {
        if (status === "a") {
            return (

                <RowCardBox>
                    <StatusGreen time={time} />
                    <Center>
                        <Mont12500Red onPress={onPress}>Cancelar</Mont12500Red>
                    </Center>
                </RowCardBox>
            )
        } else if (status === "r") {
            return (
                <RowCardBox>
                    <StatusGray time={time} />
                    <Center>
                        <Mont12500Blue onPress={onPress}>Ver Prontuário</Mont12500Blue>
                    </Center>
                </RowCardBox>
            )

        } else if (status === "c") {
            return (
                <RowCardBox>
                    <StatusGray time={time} />
                    <Center>
                    </Center>
                </RowCardBox>
            )

        }
    }



    return (
        <CardBox>
            <ImageCard source={image} />
            <Container>

                <TextCardBox>
                    <Mont16600>{name}</Mont16600>
                    <Sand14400>{age} anos · {nivel}</Sand14400>
                </TextCardBox>


                {statusCheck()}
            </Container>
        </CardBox>
    )
}

export default Card