import api from './Services/Service';
import { StatusBar } from 'react-native';
import { useFonts, Roboto_400Regular } from '@expo-google-fonts/roboto';
import { Header } from './src/components/header';
import { Container } from './src/components/container/container';
import { InputEstado, InputUF } from './src/components/input/input';
import { Label } from './src/components/labelinput/labelinput';
import { InputContainer, InputPersonalContainer } from './src/components/inputContainer/inputContainer';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { useEffect, useState } from 'react';
import { BoxInput } from './src/components/boxInput/boxInput';
import { verificaSigla } from './src/Utils/functions';

export default function App() {

  useEffect(() => {

  }, [])


  const [CEP, setCEP] = useState("");
  const [logradouro, setLogradouro] = useState("");
  const [bairro, setBairro] = useState("");
  const [cidade, setCidade] = useState("");
  const [estado, setEstado] = useState("");
  const [uf, setUf] = useState("");

  async function loadAdress() {
    try {

      let response = await (api.get(`${CEP}/json`))
      const data = (await response).data

      if(data.erro == true){
        alert("CEP Inválido")
      }
      else{
        setLogradouro(data.logradouro)
        setBairro(data.bairro)
        setCidade(data.localidade)
        setUf(data.uf)
        const estado = verificaSigla(data.uf)
        setEstado(estado);
      }
    } catch (error) {
      if(CEP.length != 8){
        alert("CEP Inválido")
        return
      }
      alert(error)
    }
  }



  let [fontsLoaded, fontError] = useFonts({
    Roboto_400Regular
  });

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <>
      <Header />
      <KeyboardAwareScrollView>

        <Container>

          <BoxInput
            labelText={"Insira o CEP"}
            onChangeText={setCEP}
            placeholder={"XXXXXX-XX"}
            value={CEP}
            keyboardType={"numeric"}
            onBlur={loadAdress}
            maxLength={8}
            />

          <BoxInput
            labelText={"Logradouro"}
            onChangeText={setLogradouro}
            placeholder={"Ex: Rua dos Açores"}
            value={logradouro} />

          <BoxInput
            labelText={"Bairro:"}
            onChangeText={setBairro}
            placeholder={"Ex: Vila dos Tamanduás"}
            value={bairro} />

          <BoxInput
            labelText={"Cidade:"}
            onChangeText={setCidade}
            placeholder={"Ex: Tangamandápio"}
            value={cidade} />

          <InputPersonalContainer>
            <InputContainer>
              <Label>Estado:</Label>
              <InputEstado
                placeholder="São Paulo"
                value={estado}
                onChangeText={setEstado} />
            </InputContainer>

            <InputContainer>
              <Label>UF:</Label>
              <InputUF
                placeholder="SP"
                value={uf}
                onChangeText={setUf}
                maxLength={2}
              />
            </InputContainer>
          </InputPersonalContainer>

          <StatusBar style="auto" />
        </Container>
      </KeyboardAwareScrollView >

    </>

  );
}

