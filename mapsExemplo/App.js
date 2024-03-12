import {
  requestForegroundPermissionsAsync, //solicita acesso a localização atual do dispositivo
  getCurrentPositionAsync, // recebe a localização atual do dispositivo 
  watchPositionAsync, //Monitorar o posicionamento do usuário
  LocationAccuracy //
} from 'expo-location'
import { useEffect, useRef, useState } from 'react';
import { ActivityIndicator, StyleSheet, Text, View } from 'react-native';

// importando dependencias do mapa
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';
import { mapskey } from './utils/mapsApiKey';

export default function App() {

  const mapReference = useRef(null)
  const [initialPosition, setInitialPosition] = useState(null)
  const [finalPosition, setFinalPosition] = useState({
    latitude: -23.5612,
    longitude: -46.6557,
  })

  // função para pedir acesso ao Usuário e obter sua localização atual
  async function capturarLocalizacao() {
    const { granted } = await requestForegroundPermissionsAsync()

    // se permissão concedida receber posição atual
    if (granted) {
      const captureLocation = await getCurrentPositionAsync()
      setInitialPosition(captureLocation);
    }

  }

  //  constante para estilizar o mapa de acordo com nosso tema
  const grayMapStyle = [
    {
      elementType: "geometry",
      stylers: [
        {
          color: "#E1E0E7",
        },
      ],
    },
    {
      elementType: "geometry.fill",
      stylers: [
        {
          saturation: -5,
        },
        {
          lightness: -5,
        },
      ],
    },
    {
      elementType: "labels.icon",
      stylers: [
        {
          visibility: "on",
        },
      ],
    },
    {
      elementType: "labels.text.fill",
      stylers: [
        {
          color: "#FBFBFB",
        },
      ],
    },
    {
      elementType: "labels.text.stroke",
      stylers: [
        {
          color: "#33303E",
        },
      ],
    },
    {
      featureType: "administrative",
      elementType: "geometry",
      stylers: [
        {
          color: "#fbfbfb",
        },
      ],
    },
    {
      featureType: "administrative.country",
      elementType: "labels.text.fill",
      stylers: [
        {
          color: "#fbfbfb",
        },
      ],
    },
    {
      featureType: "administrative.land_parcel",
      stylers: [
        {
          visibility: "on",
        },
      ],
    },
    {
      featureType: "administrative.locality",
      elementType: "labels.text.fill",
      stylers: [
        {
          color: "#fbfbfb",
        },
      ],
    },
    {
      featureType: "poi",
      elementType: "labels.text.fill",
      stylers: [
        {
          color: "#fbfbfb",
        },
      ],
    },
    {
      featureType: "poi.business",
      stylers: [
        {
          visibility: "on",
        },
      ],
    },
    {
      featureType: "poi.park",
      elementType: "geometry",
      stylers: [
        {
          color: "#66DA9F",
        },
      ],
    },
    {
      featureType: "poi.park",
      elementType: "labels.text",
      stylers: [
        {
          visibility: "on",
        },
      ],
    },
    {
      featureType: "poi.park",
      elementType: "labels.text.fill",
      stylers: [
        {
          color: "#fbfbfb",
        },
      ],
    },
    {
      featureType: "poi.park",
      elementType: "labels.text.stroke",
      stylers: [
        {
          color: "#1B1B1B",
        },
      ],
    },
    {
      featureType: "road",
      stylers: [
        {
          visibility: "on",
        },
      ],
    },
    {
      featureType: "road",
      elementType: "geometry.fill",
      stylers: [
        {
          color: "#C6C5CE",
        },
      ],
    },
    {
      featureType: "road",
      elementType: "labels.text.fill",
      stylers: [
        {
          color: "#FBFBFB",
        },
      ],
    },
    {
      featureType: "road.arterial",
      elementType: "geometry",
      stylers: [
        {
          color: "#ACABB7",
        },
      ],
    },
    {
      featureType: "road.highway",
      elementType: "geometry",
      stylers: [
        {
          color: "#8C8A97",
        },
      ],
    },
    {
      featureType: "road.highway.controlled_access",
      elementType: "geometry",
      stylers: [
        {
          color: "#8C8A97",
        },
      ],
    },
    {
      featureType: "road.local",
      elementType: "labels.text.fill",
      stylers: [
        {
          color: "#fbfbfb",
        },
      ],
    },
    {
      featureType: "transit",
      elementType: "labels.text.fill",
      stylers: [
        {
          color: "#fbfbfb",
        },
      ],
    },
    {
      featureType: "water",
      elementType: "geometry",
      stylers: [
        {
          color: "#8EA5D9",
        },
      ],
    },
    {
      featureType: "water",
      elementType: "labels.text.fill",
      stylers: [
        {
          color: "#fbfbfb",
        },
      ],
    },
  ];



  useEffect(() => {
    capturarLocalizacao()

    // função para buscar a posição do usuario a cada instante
    watchPositionAsync({
      accuracy: LocationAccuracy.Highest,
      timeInterval: 1000,
      distanceInterval: 1
    }, //função para setar a posição inicial a cada instante que obtemos a posição do usuário
      async (response) => {
        // recebe e guarda a nova função
        await setInitialPosition(response)


        // função para atualizar a posição do mapa de acordo com a posição do usuário
        mapReference.current?.animateCamera({
          pitch: 60,
          center: response.coords
        })
      })
  }, [1000])

  useEffect(() => {
    recarregarVisualizacaoMapa()
  }, [initialPosition])



  // função para mostrar o ponto central entre os dois marcadores que definimos
  async function recarregarVisualizacaoMapa() {

    if (mapReference.current && initialPosition) {
      await mapReference.current.fitToCoordinates(
        [
          { latitude: initialPosition.coords.latitude, longitude: initialPosition.coords.longitude },
          { latitude: finalPosition.latitude, longitude: finalPosition.longitude }
        ],
        {
          edgePadding: { top: 60, right: 60, bottom: 60, left: 60 },
          animated: true
        }
      )
    }

  }

  return (
    <View style={styles.container}>



      {initialPosition != null ?

        <>
          <MapView
            ref={mapReference}

            initialRegion={{
              latitude: initialPosition.coords.latitude,
              longitude: initialPosition.coords.longitude,
              latitudeDelta: 0.0050,
              longitudeDelta: 0.0050,
            }}
            style={styles.map}
            customMapStyle={grayMapStyle}
          >

            <Marker
              coordinate={{
                latitude: initialPosition.coords.latitude,
                longitude: initialPosition.coords.longitude,
              }}
              title='Você está aqui'
              pinColor={'purple'}
            />

            {/* o que realiza a busca do caminho entre dois pontos */}
            <MapViewDirections
              origin={initialPosition.coords}
              destination={{
                latitude: -23.5612,
                longitude: -46.6557,
                latitudeDelta: 0.0050,
                longitudeDelta: 0.0050,
              }}
              strokeWidth={3}
              strokeColor='#5218FA'
              apikey={mapskey}
            />


            <Marker
              coordinate={{
                latitude: -23.5612,
                longitude: -46.6557,
              }}
              title='Seu destino'
            />


          </MapView>

        </> : <>

          <Text>Localização não encontrada</Text>
          <ActivityIndicator />

        </>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  map: {
    flex: 1,
    width: "100%"
  },
});
