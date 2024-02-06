import { Button, Text, View } from "react-native";
import { Container } from "../../components/container/style";
import { Logo } from "../../components/logo/style";
import { Title } from "../../components/title/title";
import { Input } from "../../components/input/input";
import { LinkMedium } from "../../components/links/links";
import ForgotPassword from "../forgotPassword/forgotPassword";

const Login = ({navigation}) => {
    return(
        <Container>

              <Logo source={require("../../assets/img/VitalHubLogo.png")} />

            <Title>Entrar ou criar conta</Title>

            <Input 
            placeholder="Usuário ou email" />
            <Input 
            placeholder="Senha..."
            secureTextEntry={true}
            />


            <LinkMedium onPress={() => {navigation.navigate(ForgotPassword)}}>Esqueceu sua senha</LinkMedium>
{/*
            <Button>
                <ButtonTitle></ButtonTitle>
            </Button>

            <ButtonGoogle>
                <ButtonTitleGoogle></ButtonTitleGoogle>
            </ButtonGoogle>

            <ContentAccount>
                <TextAccount></TextAccount>
            </ContentAccount>  */}
            
        </Container>
    )
}

export default Login;