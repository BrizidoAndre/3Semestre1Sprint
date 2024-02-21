import styled from "styled-components";

export const GrayBackground = styled.View`
    position: absolute;
    width: 100%;
    height:100%;
    background-color: rgba(0,0,0, 0.5);
    z-index: 1;

    display: flex;
    justify-content: center;
    align-items: center;

`

export const ModalCancel = styled.View`
    width: 90%;
    height:35%;
    border-radius:10px;
    padding: 16px;

    background-color: white;
`

export const ModalMedRecord = styled.View`
    width: 90%;
    height:55%;
    border-radius:10px;
    padding: 16px;

    background-color: white;
`

export const BottomModal = styled.View`
    width: 100%;
    height: 70%;
    border-radius: 10px 10px 0 0;
    padding:20px 0;

    background-color: white;

    position: absolute;
    bottom: 0;
`


export const ImageProfile = styled.Image`
    width:  90%;
    height: 180px;

    border-radius: 10px;
`