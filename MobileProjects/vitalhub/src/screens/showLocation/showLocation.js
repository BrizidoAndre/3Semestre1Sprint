import { useEffect, useState } from "react";
import { Dimensions } from "react-native";
import MapView from 'react-native-maps';
import { Marker } from 'react-native-maps';
import { CalendarContainer, InputContainer, RowContainer } from "../../components/container/style";
import { Sand14600, Title } from "../../components/title/title";
import { InputLabelBlack, SmallInputLabel } from "./styles";


const ShowLocation = ({ }) => {

    const [map, setMap] = useState({
        latitude: -23.545244529589244,
        longitude: -46.4741755601089,
        latitudeDelta: 0.0030,
        longitudeDelta: 0.0030,
    })



    useEffect(() => {

    }, [map])




    return (
        <>
            <MapView
                style={
                    {
                        width: Dimensions.get('window').width,
                        height: '50%'
                    }
                }
                initialRegion={map} >
                <Marker
                    coordinate={map}

                />

            </MapView>
            <CalendarContainer>
                <Title>CLinicaNatureh</Title>
                <Sand14600>Teste</Sand14600>
                <InputContainer>
                    <InputLabelBlack  title={"Endereço"} text={'Rua Exemplo Nº'} />
                </InputContainer>
                <RowContainer>
                    <SmallInputLabel title={'Número'} text={143} />
                    <SmallInputLabel title={'Bairro'} text={'Moema-SP'} />
                </RowContainer>
            </CalendarContainer>
        </>
    )
}


export default ShowLocation