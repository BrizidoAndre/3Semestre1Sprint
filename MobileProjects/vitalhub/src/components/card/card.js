import { TouchableOpacity } from "react-native"
import { Center, Container, RowContainer } from "../container/style"
import { NavButtonComponent } from "../navButton/navButton"
import Status, { StatusGray, StatusGreen } from "../status/status"
import { Mont12500Blue, Mont12500Red, Mont16600, Sand14400, SubTitle } from "../title/title"
import { CardBox, ImageCard, RowCardBox, TextCardBox } from "./styles"

const Card = ({ image, time, status }) => {

    const StatusCheck = () => {
        if (status === "a") {
            return (

                <RowCardBox>
                    <StatusGreen time={time} />
                    <Center>
                        <Mont12500Red>Cancelar</Mont12500Red>
                    </Center>
                </RowCardBox>
            )
        } else if (status === "r") {
            return (
                <RowCardBox>
                    <StatusGray time={time} />
                    <Center>
                        <Mont12500Blue>Cancelar</Mont12500Blue>
                    </Center>
                </RowCardBox>
            )

        } else if (status === "c") {
            return (
                <RowCardBox>
                    <StatusGreen time={time} />
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
                    <Mont16600>Richard Kosta</Mont16600>
                    <Sand14400>22. anos</Sand14400>

                </TextCardBox>


                {StatusCheck()}
            </Container>
        </CardBox>
    )
}

export default Card