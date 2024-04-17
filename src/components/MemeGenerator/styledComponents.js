import styled from 'styled-components'

export const CustomDiv = styled.div`
  background-image: url("${props => props.imageUrl}");
  height: 100vh;
`
export const CustomPara = styled.p`
  color: #ffffff;
  font-size: ${props => props.fontSize}px;
`
