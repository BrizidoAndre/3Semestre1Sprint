import { HeaderSubTitle, WhiteHeaderTitle} from "../title/title";
import { HeaderContainer, IconHeader, PictureHeader } from "./styles";
import Profile from "../../assets/img/Rectangle425.png"
import { HeaderTextContainer, InputContainer, RowContainer, TwoInputContainer } from "../container/style";
import Bell from "../../assets/img/Group94.png"
import { View } from "react-native";


const Header = ({profileName = "John Doe"}) => {
    return (
        <HeaderContainer>

                <RowContainer>
                    <PictureHeader source={Profile} />

                    <HeaderTextContainer>
                        <HeaderSubTitle>Bem Vindo</HeaderSubTitle>
                        <WhiteHeaderTitle>{profileName}</WhiteHeaderTitle>
                    </HeaderTextContainer>
                </RowContainer>

                <IconHeader source={Bell} />
        </HeaderContainer>
    )
}

export default Header;