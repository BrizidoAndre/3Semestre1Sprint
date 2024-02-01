import { StatusBar } from 'react-native';
import { useFonts, Roboto_400Regular } from '@expo-google-fonts/roboto';
import { Header } from './src/components/header';
import { Container } from './src/components/container/container';
import { Input, InputEstado, InputUF } from './src/components/input/input';
import { Label } from './src/components/labelinput/labelinput';
import { InputContainer, InputPersonalContainer } from './src/components/inputContainer/inputContainer';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { useEffect, useState } from 'react';
import { BoxInput } from './src/components/boxInput/index'
import { LabelEx } from './src/components/labelinput';
import { InputEx } from './src/components/input';

export default function App() {

  useEffect(() => {

  }, [])


  const [CEP, setCEP] = useState("");
  const [logradouro, setLogradouro] = useState("");
  const [bairro, setBairro] = useState("");
  const [cidade, setCidade] = useState("");
  const [estado, setEstado] = useState("");
  const [uf, setUf] = useState("");


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
          <InputContainer>
            <Label>Informar CEP:</Label>
            <Input
              value={CEP}
              onChangeText={setCEP}
              placeholder="XXXXXX-XX"
              keyboardType="numeric"></Input>
          </InputContainer>

          <InputContainer>
            <Label>Logradouro:</Label>
            <Input
              placeholder="EX: Rua dos Açores"
              value={logradouro}
              onChangeText={setLogradouro}
            ></Input>
          </InputContainer>

          <InputContainer>
            <Label>Bairro:</Label>
            <Input
              placeholder="Ex: Vila dos Tamanduás"
              value={bairro}
              onChangeText={setBairro}
            ></Input>
          </InputContainer>

          <InputContainer>
            <Label>Cidade:</Label>
            <Input
              placeholder="Ex: Tangamandápio"
              value={cidade}
              onChangeText={setCidade}
            ></Input>
          </InputContainer>

          <InputPersonalContainer>

            <InputContainer>
              <Label>Estado:</Label>
              <InputEstado
                placeholder="São Paulo"
                value={estado}
                onChangeText={setEstado}/>
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

