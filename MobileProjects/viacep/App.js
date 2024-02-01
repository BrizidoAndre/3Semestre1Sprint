import { StatusBar } from 'react-native';
import { useFonts, Roboto_400Regular } from '@expo-google-fonts/roboto';
import { Header } from './src/components/header';
import { Container } from './src/components/container/container';
import { Input, InputEstado, InputUF } from './src/components/input/input';
import { Label } from './src/components/labelinput/labelinput';
import { InputContainer, InputPersonalContainer } from './src/components/inputContainer/inputContainer';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { useEffect, useState } from 'react';

export default function App() {

  useEffect(()=>{

  },[])

  
  const [endereco, setEndereco] = useState("");
  

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
            value={endereco} 
            onChangeText={setEndereco} 
            placeholder="XXXXXX-XX"
            keyboardType="numeric"></Input>
          </InputContainer>

          <InputContainer>
            <Label>Logradouro:</Label>
            <Input placeholder="EX: Rua dos Açores"></Input>
          </InputContainer>

          <InputContainer>
            <Label>Bairro:</Label>
            <Input placeholder="Ex: Vila dos Tamanduás"></Input>
          </InputContainer>

          <InputContainer>
            <Label>Cidade:</Label>
            <Input placeholder="Ex: Tangamandápio"></Input>
          </InputContainer>

          <InputPersonalContainer>

            <InputContainer>
              <Label>Estado:</Label>
              <InputEstado placeholder="São Paulo" />
            </InputContainer>

            <InputContainer>
              <Label>UF:</Label>
              <InputUF placeholder="SP" />
            </InputContainer>

          </InputPersonalContainer>


          <StatusBar style="auto" />
        </Container>
      </KeyboardAwareScrollView >

    </>

  );
}

