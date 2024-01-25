import { StatusBar } from 'expo-status-bar';
import { Image, StyleSheet, Text, TextInput, TouchableHighlight, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Image style={styles.poke} source={require('./src/assets/img/depositphotos_116786710-stock-photo-volumetric-image-pokeball-on-a.png')} />
      
      <Text style={styles.title}>Login</Text>

      <View>
        <Text style={styles.title}>Email</Text>
        <TextInput placeholder='Digite seu email'/>

        <Text style={styles.title}>Senha</Text>
        <TextInput placeholder='Digite sua senha'/>

      </View>

      <TouchableHighlight style={styles.btn}>
        <Text style={styles.title}>
          Entrar
        </Text>
      </TouchableHighlight>
      
      
      
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  poke: {
    width: 50,
    height: 50,
  },
  title:{
    fontSize:20,
    color:'black',
    fontWeight:"800",
  },
  btn:{
    backgroundColor:'red',
    
  }
});
