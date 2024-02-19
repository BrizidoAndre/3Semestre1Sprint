import styled from "styled-components";

export const CardBox = styled.View`
    border-radius: 2px;
    elevation: 2;

    width: 90%;
    height: 100px;
    padding: 15px;

    background-color: white;

    margin:6px 0;

    display: flex;
    flex-direction: row;
    justify-content:space-between;
    align-items:center;
    gap:10px;

`

export const ImageCard = styled.Image`
    width: 80px;
    height: 80px;
    border-radius: 5px;
`

export const TextCardBox = styled.View`
    width: 100%;
    display: flex;
    align-items:flex-start;
    gap:3px;
    margin-bottom: 10px;

`

export const RowCardBox = styled.View`
    width: 100%;
    display:flex;
    flex-direction:row;
    justify-content:space-between;
`