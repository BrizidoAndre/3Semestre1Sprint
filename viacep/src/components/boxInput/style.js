import styled from "styled-components";

export const FieldContent = styled.View`
/* define o valor da largura como a props definida */
    width: ${props => `${props.fieldWidth}%`};
`