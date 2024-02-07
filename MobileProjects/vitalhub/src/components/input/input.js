import styled from "styled-components";

export const Input = styled.TextInput.attrs({
    placeholderTextColor: '#34898f'
})`
    width: 90%;
    height: 53px;
    padding:16px;

    border:2px solid #49b3ba;
    border-radius: 5px;
    color: #34898f;
    font-size: 16px;
    font-family: MontserratAlternates_600SemiBold;
`


export const InputNumber = styled.TextInput.attrs({
    placeholderTextColor: '#34898F'
})`
    width: 65px;
    height:62px;

    border: 2px solid #77CACF;
    border-radius: 5px;

    text-align:center;

    color: #34898F;
    font-size:40px;
`