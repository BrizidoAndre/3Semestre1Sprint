import { NavButtonTitle, WhiteNavButtonTitle } from "../button/buttonTitle"
import {BlueNavButton, NavButton} from '../button/button'

export const NavButtonComponent = ({selected = false, buttonTitle, onPress=null}) => {
    return(
        <>
            {selected ? 
            <BlueNavButton onPress={onPress}><WhiteNavButtonTitle>{buttonTitle}</WhiteNavButtonTitle></BlueNavButton>
            :
            <NavButton onPress={onPress}><NavButtonTitle>{buttonTitle}</NavButtonTitle></NavButton>
            }
        </>
    )
}