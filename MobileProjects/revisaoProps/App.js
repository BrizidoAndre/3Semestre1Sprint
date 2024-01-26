import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import Person from './src/components/person/Person';

export default function App() {
  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.container}>
        <Person age={19} name={"André Basilio"} />
        <Person age={20} name={"Edu"} />
        <Person age={16} name={"Arthur"} />
        <Person age={16} name={"Ana"} />
        <Person age={19} name={"Richard"} />
        <StatusBar />
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#e0e0e0',
    padding: 10,
    margin: 10,
    borderRadius: 5,

    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
});
