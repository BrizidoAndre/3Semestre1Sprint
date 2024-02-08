import styled from "styled-components";

export const Container = styled.SafeAreaView`
flex: 1;
align-items: center;
background-color: #fafafa;
justify-self: center;
`

export const ButtonContainer = styled.View`
width: 80%;
display: flex;
flex-direction: row;
justify-content: space-around;
`

export const InputContainer = styled.View`
display: flex;
align-items: center;
gap: 10px;

width: 100%;

margin-bottom: 30px;

`

export const InputNumberContainer = styled.View`
width: 80%;
margin: 20px 0 30px 0;

display: flex;
flex-direction: row;
justify-content: space-between;
align-items: center;
`

export const ImageContainer = styled.View`
    width: 100%;
    height: 40%;

    position: fixed;
    top: 0px;
`

export const TwoInputContainer = styled.View`
    width: 100%;
    
    display: flex;
    flex-direction: row;
    justify-content:space-between;
    align-items: center;
    margin-bottom:20px;
`

export const SmallInputLabelContainer = styled.View`
    width: 45%;
`