import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native';
import { Container } from './src/components/container/container';
import { Title } from './src/components/title/title';
import { Button } from './src/components/button/button';
import { useFonts, SingleDay_400Regular } from '@expo-google-fonts/single-day';

export default function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log(console.warn(`Contador Atualizado: ${count}`));
  }, [count])

  const increment= () => {
    setCount(count + 1)
  }
  const decrement= () => {
    setCount(count - 1)
  }

  let [fontsLoaded, fontError] = useFonts({
    SingleDay_400Regular
  });
  if (!fontsLoaded && !fontError) {
    return null;
  }

  const verifyImage = () => {
    if(count < 5){
      return "./src/img/Phase_1.png"
    }
    else if(count < 10){
      return "./src/img/phase2.png"
    }
    else if(count < 10){
      return "./src/img/phase3.png"
    }
    else if(count < 10){
      return "./src/img/phase4.png"
    }
  }


  return (
    <Container> 
      <Title color={"white"}>Contador:</Title>
      <Title color={"white"}>{count}</Title>
      <Image style={styles.img} source={require(verifyImage())}/>

      <Button color={"green"} onPress={increment}>
        <Title color={"black"}>Increment</Title>
      </Button>
      <Button color={"red"} onPress={decrement} >
        <Title color={"black"}>Decrement</Title>
      </Button>
      <StatusBar style="auto" />
    </Container>
  );
};

const styles = StyleSheet.create({
  img: {
    width:100,
    height:100,
  }
})