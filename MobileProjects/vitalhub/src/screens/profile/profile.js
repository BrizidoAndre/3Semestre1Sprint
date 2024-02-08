import { ScrollView } from "react-native"
import { Container, InputContainer, LabelInputContainer, TwoInputContainer } from "../../components/container/style"
import { ImageModal } from "../../components/modal/modal"
import { SubTitle, Title } from "../../components/title/title"
import { InputLabel, SmallInputLabel } from "../../components/input/inputLabel"
import { ScrollViewProfile } from "../../components/ScrollViewProfile/scrollViewProfile"
import { SmallButton } from "../../components/button/button"
import { ButtonTitle } from "../../components/button/buttonTitle"
import { HeaderImage } from "../../components/headerImage/headerImage"

const Profile = () => {

    return (
        <Container>
            <HeaderImage  requireImage={require("../../assets/img/Rectangle425.png")}/>

            <ImageModal>
                <Title>Richard Kosta</Title>
                <SubTitle>richard.kosta@email.com</SubTitle>
            </ImageModal>


            <ScrollViewProfile>
                <InputContainer>
                    <InputLabel title={"Data de nascimento"} placeholder={"04/10/1999"} />
                    <InputLabel title={"CPD"} placeholder={"143553660123"} />
                    <InputLabel title={"Endereço"} placeholder={"Rua dos Açores, 132"} />
                    <InputLabel title={"Data de nascimento"} placeholder={"Ex: 4"} />

                    <TwoInputContainer>
                        <SmallInputLabel title={"CEP"} placeholder={"XXXXXXXX"} />
                        <SmallInputLabel title={"CIDADE"} placeholder={"Ex: SP"} />
                    </TwoInputContainer>


                    <SmallButton><ButtonTitle>SALVAR</ButtonTitle></SmallButton>
                </InputContainer>
            </ScrollViewProfile>
        </Container>
    )

}

export default Profile