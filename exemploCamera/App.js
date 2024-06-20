import { StatusBar } from 'expo-status-bar';
import { Alert, Image, Modal, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Camera, CameraType, FlashMode } from 'expo-camera'
import { useEffect, useRef, useState } from 'react';
import { FontAwesome } from '@expo/vector-icons';
import * as MediaLibrary from 'expo-media-library'

export default function App() {

  // Use states para o uso camera
  const cameraRef = useRef(null)
  const [photo, setPhoto] = useState(null)
  // Use state do tipo da camera
  const [camera, setCamera] = useState(Camera.Constants.Type.back)
  // Use state do modal
  const [openModal, setOpenModal] = useState(false)







  // Use states para o flash
  const [flash, setFlash] = useState(Camera.Constants.FlashMode.off)
  const [flashBoll, setFlashBoll] = useState(false)
  // Use states para o focus
  const [focus, setFocus] = useState(Camera.Constants.AutoFocus.on)
  const [focusBoll, setFocusBoll] = useState(true)
  // Use state para ver a gravação em andamento
  const [record, setRecord] = useState(false)
  const [video, setVideo] = useState(null)





  async function CaptureVideo() {
    if (cameraRef) {
      setRecord(true);
      const video = await cameraRef.current.recordAsync()
      setVideo(video.uri)
      console.log(video.uri);
    }

  }

  async function CloseVideo() {
    if (cameraRef) {
      setRecord(false);
      const video = await cameraRef.current.stopRecording();
    }

  }

  // Acho que esta função não está sendo utilizada
  async function SaveVideo() {
    if (video) {
      await MediaLibrary.createAssetAsync(video)
        .then(() => {
          Alert.alert('Sucesso', 'Video salvo na galeria')
        })
        .catch(error => {
          alert("Erro ao processar video")
        })
    }
  }


  async function clearPhoto() {

    setPhoto(null)
    setOpenModal(false)

    // if (await MediaLibrary.getAssetsAsync(photo)) {
    //   await MediaLibrary.deleteAssetsAsync(photo)
    //     .then(() => {
    //       Alert.alert('Foto deletada', 'A imagem foi deletada da galeria')
    //     })
    //     .catch(() => {
    //       Alert.alert('teste','testado')
    //     })
    // }
  }

  function TurnFlash() {
    // Boleano para verificar se o flash está ativado ou não
    if (flashBoll) {
      setFlash(Camera.Constants.FlashMode.off)
      setFlashBoll(false)
    } else {
      setFlash(Camera.Constants.FlashMode.on)
      setFlashBoll(true)
    }
  }

  function TurnFocus(){
    if(focusBoll){
      setFocus(Camera.Constants.AutoFocus.off)
      setFocusBoll(false)
    }
    else{
      setFocus(Camera.Constants.AutoFocus.on)
      setFocusBoll(true)
    }
  }


  async function CapturePhoto() {
    if (cameraRef) {
      const photo = await cameraRef.current.takePictureAsync();

      setPhoto(photo.uri)
      setOpenModal(true)
    }
  }

  async function savePhoto() {
    if (photo) {
      await MediaLibrary.createAssetAsync(photo)
        .then(() => {
          Alert.alert('Sucesso', 'Foto salva na galeria')
          setOpenModal(false)
        })
        .catch(error => {
          alert("Erro ao processar foto")
        })
    }
  }


  useEffect(() => {
    (async () => {
      const { status: cameraStatus } = await Camera.requestCameraPermissionsAsync();

      const { status: mediaStatus } = await MediaLibrary.requestPermissionsAsync();

      const { status: microphoneStatus } = await Camera.requestMicrophonePermissionsAsync();

    })()

    // Condicional para cada vez que um vídeo for realizado salvar na media
    if (video) {
      MediaLibrary.createAssetAsync(video)
        .then(() => {
          Alert.alert('Sucesso', 'Video salvo na galeria')
        })
        .catch(error => {
          alert("Erro ao processar foto")
        })
    }
  }, [video])


  return (

    <View style={styles.container}>


      <Camera
        type={camera}
        style={styles.camera}
        ratio={'16:9'}
        ref={cameraRef}
        
        flashMode={flash}
        autoFocus={focus}
      >

        <View style={styles.viewFlip}>

          <TouchableOpacity
            style={styles.btnFlip}
            onPress={() => setCamera(camera == CameraType.front ? CameraType.back : CameraType.front)}>
            <Text style={styles.txtFlip}>Trocar</Text>
          </TouchableOpacity>

        </View>
      </Camera>

      <View style={{ flexDirection: 'row' }}>

        {record ?
          <>


            <TouchableOpacity
              style={styles.btnCaptura}
              onPress={() => { CloseVideo(); SaveVideo() }}>
              <FontAwesome name='circle-o-notch' size={23} color={'#fff'} />
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.btnCaptura}
              onPress={() => { TurnFlash() }}>
              <FontAwesome name='square-o' size={23} color={focusBoll ? 'white' : 'gray'} />
            </TouchableOpacity>


          </> : <>


            <TouchableOpacity
              style={styles.btnCaptura}
              onPress={() => CaptureVideo()}>
              <FontAwesome name='circle-o-notch' size={23} color={'#fff'} />
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.btnCaptura}
              onPress={() => { TurnFocus() }}>
              <FontAwesome name='square-o' size={23} color={focusBoll ? 'white' : 'gray'} />
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.btnCaptura}
              onPress={() => CapturePhoto()}>
              <FontAwesome name='camera' size={23} color={'#fff'} />
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.btnCaptura}
              onPress={() => { TurnFlash() }}>
              <FontAwesome name='bolt' size={23} color={flashBoll ? 'white' : 'gray'} />
            </TouchableOpacity>
          </>
        }



      </View>

      <Modal animationType='slide' transparent={false} visible={openModal}>
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', padding: 30 }}>

          <Image
            style={{ width: '100%', height: 500, borderRadius: 10 }}
            source={{ uri: photo }} />

          <View style={{ alignItems: 'center', flexDirection: 'row', gap: 20 }}>

            <TouchableOpacity style={styles.btnCancel} onPress={() => clearPhoto()}>
              <FontAwesome name='trash' size={120} color={'#ff0000'} />
            </TouchableOpacity>

            <TouchableOpacity style={styles.btnUpload} onPress={() => savePhoto()}>
              <FontAwesome name='save' size={120} color={'#00ff00'} />
            </TouchableOpacity>

          </View>

        </View>
      </Modal>
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
  camera: {
    flex: 1,
    height: "80%",
    width: "100%"
  },
  viewFlip: {
    flex: 1,
    backgroundColor: 'transparent',
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
  btnFlip: {
    padding: 15,
  },
  txtFlip: {
    fontSize: 20,
    color: '#FFF',
    marginBottom: 20,
  },
  btnCaptura: {
    margin: 20,
    padding: 20,
    borderRadius: 15,
    backgroundColor: "#121212",

    alignItems: "center",
    justifyContent: "center"
  },
  btnFlashOn: {
    margin: 20,
    padding: 20,
    borderRadius: 15,
    backgroundColor: "#fff",

    alignItems: "center",
    justifyContent: "center"
  },
  btnCancel: {
    padding: 20,
    borderRadius: 15,
    backgroundColor: 'transparent',

    alignContent: 'center',
    justifyContent: 'center'
  }
});
