import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Navigation from './src/screens/navigation/navigation';
import Login from './src/screens/login/login';
import ForgotPassword from './src/screens/forgotPassword/forgotPassword';

// import da fonts
import { useFonts,
  MontserratAlternates_700Bold,
  MontserratAlternates_600SemiBold,
  MontserratAlternates_500Medium } from '@expo-google-fonts/montserrat-alternates';
import CheckEmail from './src/screens/checkEmail/checkEmail';
import RedefinePassword from './src/screens/redefinePassword/redefinePassword';
import CreateAccount from './src/screens/createAccount/createAccount';

// instância do Stack Navigator
const Stack = createNativeStackNavigator();

export default function App() {

  const [fontsLoaded, fontsError] = useFonts({
    MontserratAlternates_700Bold,
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
        <Stack.Navigator screenOptions={{headerShown:false}}>

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

            <Stack.Screen

            name="CheckEmail"

            component={CheckEmail}

            options={ {title: "Check Email"}}
            />

            <Stack.Screen
            
            name='RedefinePassword'

            component={RedefinePassword}

            options={{title: "Redefine Passord"}}
            
            />

            <Stack.Screen 
            
            name='CreateAccount'

            component={CreateAccount}
            />

        </Stack.Navigator>

      </NavigationContainer>

  );
}