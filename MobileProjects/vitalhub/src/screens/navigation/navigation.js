import { Button, View } from "react-native"

const Navigation = ({ navigation }) => {
    return (
        <View style={{ flex: 1, alignItems: "center", justifyContent: "center", gap: 20 }}>
            <Button
                title="Login"
                onPress={() => navigation.navigate("Login")}
            />
            <Button
                title="Forgot the password"
                onPress={() => navigation.navigate("ForgotPassword")} />

            <Button
                title="User Profile"
                onPress={() => navigation.navigate("User Profile")} />

            <Button
                title="Appointment"
                onPress={() => navigation.navigate("Appointment")} />
        </View>
    );
}

export default Navigation;