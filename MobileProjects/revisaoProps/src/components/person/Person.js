import { Text, View,StyleSheet } from "react-native"

const Person = ({ name, age }) => {
    return (
        <>
            <View style={styles.container}>
                <Text>Nome: {name}</Text>
                <Text>Idade: {age}</Text>
            </View>
        </>
    )
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        gap:10,
        borderColor:"black",
        borderWidth: 5,

        width:200,
        height:40
    }
})
export default Person