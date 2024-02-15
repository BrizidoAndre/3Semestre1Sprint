import styled from "styled-components";
import {LinearGradient} from 'expo-linear-gradient'

export const HeaderContainer = styled(LinearGradient).attrs({
    colors: ['#60BFC5','#496BBA'],
    start: { x: 0, y: 0 },
    end: { x: 1, y: 0 },
})`
    width: 100%;
    height: 20%;
    border-radius: 12px;
    padding:15% 20px 10px 30px;

    display:flex;
    flex-direction: row;
    align-items: center;
    justify-content:space-between;
`

export const PictureHeader = styled.Image`
    width:60px;
    height: 60px;
    border-radius: 8px;
`

export const IconHeader = styled.Image`
    width:25px;
    height: 25px;
    margin:15px;
`
