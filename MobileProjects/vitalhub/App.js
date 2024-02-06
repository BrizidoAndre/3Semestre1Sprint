import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Navigation from './src/screens/navigation/navigation';
import Login from './src/screens/login/login';
import ForgotPassword from './src/screens/forgotPassword/forgotPassword';

// import da fonts
import { useFonts,
  MontserratAlternates_600SemiBold,
  MontserratAlternates_500Medium } from '@expo-google-fonts/montserrat-alternates';

// instância do Stack Navigator
const Stack = createNativeStackNavigator();

export default function App() {

  const [fontsLoaded, fontsError] = useFonts({
    MontserratAlternates_600SemiBold,
    MontserratAlternates_500Medium
  })

  if (!fontsLoaded && !fontsError) {
    return null;
  }

  return (
    // Criando nossa navegação personalizada

    // Container
    // stacknavigator
    // stack screen

    // envolve a estrutura de navegação
    
      <NavigationContainer>
        {/* componente para navegação */}
        <Stack.Navigator>

          {/* tela Login */}
          <Stack.Screen
            // navegação
            name='Login'
            // componente que será chamado
            component={Login}
            // título da tela
            options={{ title: "Login" }} />

          {/* tela */}
          <Stack.Screen
            // navegação
            name='Navigation'
            // componente que será chamado
            component={Navigation}
            // título da tela
            options={{ title: "Navegação" }} />


            {/* recuperar senha */}
            <Stack.Screen

            name='ForgotPassword'

            component={ForgotPassword}

            options={ {title: "Forgot Password"}}
            />

        </Stack.Navigator>

      </NavigationContainer>

  );
}