import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import {Audio} from 'expo-av'

// importando as notificações 
import * as Notifications from 'expo-notifications'
// requesitando as permissão do usuário para as notificações
Notifications.requestPermissionsAsync()

// para configurar o comportamento das notificações
Notifications.setNotificationHandler({
  handleNotification: async () => ({
    // para mostrar a notificação na tela
    shouldShowAlert: true,
    // configura o som das notificações
    shouldPlaySound: true,
    // configura o número de notificações no icon do app
    shouldSetBadge: false,
  }),
})

export default function App() {


  // função para lidar com a chamada de notificação
  const handleCallNotifications = async () => {
    // obtem o status das permissoes
    const {status } = await Notifications.getPermissionsAsync();

    // verifica as se não foram concedidas as permissões de notificação
    if(status !== 'granted'){
      alert("Você não deixou as notificações ativas")
      return;
    }

    // agendar uma notificação para ser exibida após cinco segundos
    await Notifications.scheduleNotificationAsync({
      content:{
        title:'Hello World',
        body:'Criando uma POC para implementar expo notifications ',
        vibrate:false,
        sound:'efeito.wav',
      },
      trigger:null,
    })

  }


  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={() => handleCallNotifications()}>
        <Text>Clique aqui para envio da notificação</Text>
      </TouchableOpacity>
      <StatusBar style="auto" />
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
  button: {
    width:"80%",
    height:80,
    backgroundColor:'green',
    borderRadius:12,
    alignItems:'center',
    justifyContent:'center'
  },
  text: {
    color:'white',
    fontSize:24,
    fontWeight:'bold'
  }
});
