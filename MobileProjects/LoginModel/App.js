import { StatusBar } from 'expo-status-bar';
import { Image, StyleSheet, Text, TextInput, TouchableHighlight, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      

      <View style={styles.poke} source={require('./src/assets/img/depositphotos_116786710-stock-photo-volumetric-image-pokeball-on-a.png')} />
      <View style={styles.line} />

      <View/>


      <Text style={styles.title}>Login</Text>

      <View style={styles.flexInputs}>
        <View>
          <Text style={styles.label}>Email</Text>
          <TextInput style={styles.input} placeholder='Digite seu email' />
        </View>

        <View>
        <Text style={styles.label}>Senha</Text>
        <TextInput
          style={styles.input}
          secureTextEntry={true}
          placeholder='Digite sua senha' />
        </View>
      </View>

      <TouchableHighlight style={styles.btn}>
        <Text style={styles.titlebtn}>
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
    justifyContent: 'space-evenly',
  },
  poke: {
    width: 100,
    height: 100,
    borderColor:'black',
    borderWidth:10,
    borderRadius:50,
    
    backgroundColor:"#ffffff",
    zIndex:1,
    
    position:'absolute',
    top:50
  },
  line:{
    width:1000,
    height:105,
    backgroundColor:"red",
    borderTopColor:"white",
    borderBottomColor:"black",
    borderWidth:6,
    position:"absolute",

    top:-6,

  },
  title: {
    fontSize: 30,
    color: 'black',
    fontWeight: "800",
  },
  label: {
    fontSize: 20,
    color: 'black',
    fontWeight: "800",
  },
  titlebtn: {
    fontSize: 20,
    color: 'black',
    textAlign: 'center',
  },
  input: {
    borderColor: '#000000',
    borderWidth: 2,
    padding:5,
    borderRadius:4,
    width:250,
    marginTop:10,
  },
  btn: {
    backgroundColor: 'red',
    borderColor: '#000000',
    borderWidth: 2,
    borderRadius: 8,
    width: 120,
    height:50,

    display:'flex',
    justifyContent:'center',
    alignContent:'center',

  },
  flexInputs: {
    display: "flex",
    gap: 20,
  }
});
