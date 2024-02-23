import { TouchableOpacity, View } from "react-native"
import { Center, Container, RowContainer } from "../container/style"
import { NavButtonComponent } from "../navButton/navButton"
import Status, { StatusData, StatusGray, StatusGreen, StatusStar } from "../status/status"
import { Mont12500Blue, Mont12500Red, Mont16600, Sand14400, Sand14600, SubTitle, Title } from "../title/title"
import { CardBox, ClinicCardBox, ImageCard, RowCardBox, TextCardBox } from "./styles"
import { IconWatch } from "../status/styles"

const Card = ({ name, age, image, nivel, time = "14:00", status = "c", onPress = null }) => {

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

export const ClinicCard = ({name, location, grade, time}) => {

    return (
        <ClinicCardBox>
            <View>
                <Mont16600>{name}</Mont16600>
                <Sand14600>{location}</Sand14600>
            </View>

            <View>
                <StatusStar grade={grade}/>
                <StatusData time={time}/>
            </View>
        </ClinicCardBox>
    )
}

const CardMedic = ({ name, specialty, image }) => {

    return (
        <CardBox>
            <ImageCard source={image} />
            <Container>

                <Title>{name}</Title>
            </Container>
        </CardBox>
    )
}

export default Card