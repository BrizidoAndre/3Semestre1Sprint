import { Alert, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

// importando as bibliotecas
// De authenticação
import * as LocalAuthentication from 'expo-local-authentication'
// De armazenamento
import AsyncStorage from '@react-native-async-storage/async-storage';
// De data
import moment from 'moment';

// imports do react
import { useEffect, useState } from 'react';

export default function App() {

  const [history, setHistory] = useState({})
  const [authenticated, setAuthenticated] = useState(false)
  const [biometricExist, setBiometricExist] = useState(false)

  async function checkExistAuthenticates() {
    // validar se o aparelho tem o acesso a biometria
    const compatible = await LocalAuthentication.authenticateAsync()

    setBiometricExist(compatible)

    // consultar as validações existentes
    const types = await LocalAuthentication.supportedAuthenticationTypesAsync()
    console.log(LocalAuthentication.AuthenticationType[ types[0] ]);
  }


  async function handleAuthentication(){
    const biometric = await LocalAuthentication.isEnrolledAsync();

    // validar se existe uma biometria cadastrada
    if(!biometric){
      return Alert.alert('Falha ao logar', 'Não foi encontrado nenhuma biometria cadastrada')
    }


    // Caso exista => 
    const auth = await LocalAuthentication.authenticateAsync({
      promptMessage: 'Login com biometria'
    })


    setAuthenticated(auth.success)
               
    if( auth.success ){
      setarHistory()
    }
  }

  async function setarHistory(){
    const objAuth = {
      dateAuthenticate: moment().format('DD/MM/YYYY HH:mm:ss')
    }

    await AsyncStorage.setItem('authenticate', JSON.stringify(objAuth))

    setHistory( objAuth )
  }


  async function GetHistory(){
    const objAuth = await AsyncStorage.getItem("authenticate")

    if(objAuth){
      setHistory( JSON.parse( objAuth ) )
    }
  }


  useEffect(()=>{
    checkExistAuthenticates()

    GetHistory()
  },[])


  return (
    <View style={styles.container}>
      <Text styles={styles.title}>
        {biometricExist ? 'Seu dispositivo é compatível com a biometria' : 'O seu dispositivo não suporta faceId ou Biometria'}
      </Text>

      <TouchableOpacity style={styles.btnAuth} onPress={() => handleAuthentication()}>
        <Text style={styles.textAuth}>Autenticar Acesso</Text>
      </TouchableOpacity>

      <Text style={[styles.textReturn , {color: authenticated? 'green' : 'red'}]}>
        { authenticated ? 'Autenticado' : 'Não autenticado'}
      </Text>
      
      {
        history.dateAuthenticate 
        ?
        <Text style={styles.txtHistory}>Último acesso em {history.dateAuthenticate}</Text>
        :
        null
      }
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
  title:{
    fontSize:20,
    textAlign:'center',
    lineHeight: 30,
    width: '70%'
  },
  btnAuth:{
    padding:16,
    borderRadius:15,
    margin:20,
    backgroundColor:'#ccff00'
  },
  textAuth:{
    color: "#000",
    fontSize:20,
    fontWeight: 'bold',
  },
  textReturn:{
    fontSize:22,
    textAlign:'center',
    marginTop:50
  },
  txtHistory:{
    fontSize: 16,
    fontWeight: 'bold',
    color:'#858383',
    position:'absolute',
    bottom:70
  }
});