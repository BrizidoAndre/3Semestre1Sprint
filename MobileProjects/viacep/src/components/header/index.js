import { AppTitle, SafeArea, TitleContainer } from "./style";


export function Header(){
    return(
        <TitleContainer>
            <SafeArea>
                <AppTitle>Consumo da API ViaCep</AppTitle>
            </SafeArea>
        </TitleContainer>
    )
}