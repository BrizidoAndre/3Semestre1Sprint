import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

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

  return (
    <View style={styles.container}>
      <Text>Contador</Text>
      <Text>{count}</Text>

      <TouchableOpacity onPress={increment}>
        <Text>Increment</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={decrement}>
        <Text>Decrement</Text>
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
});
