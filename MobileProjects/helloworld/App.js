import { StatusBar } from 'expo-status-bar';
import { Button, Image, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hello World</Text>
      <StatusBar style="auto" />
      <TextInput style={styles.input} placeholder='exemplo de input'></TextInput>

      {/* sequencia de images */}
      <Image source={require('./src/assets/img/faut.jpg')} />
      <Image style={styles.img} source={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }} />

      {/* botão com a tag de botão*/}
      <Button title='Press me' style={styles.btn}/>


    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'purple',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: 'white',
    fontSize: 50,
    fontWeight: '500',
  },
  input: {
    width: '90%',
    height: 40,
    borderWidth: 1,
    borderColor: 'white',
    backgroundColor: 'white',
    padding: 10,
  },
  img: {
    width: 50,
    height: 50,
  },
  btn: {
    borderColor: 'black',
    width: '80%',
    height: 40,
    borderWidth: 1,
    marginTop:10,
    justifyContent:'center',
    alignItems:'center',
    borderRadius:5
  }
});