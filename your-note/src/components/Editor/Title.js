import React from "react"
import styled from "styled-components"

const Title = () => {
  return (
    <TitleContainer>
      <TitleText>YourNote</TitleText>
    </TitleContainer>
  )
}

const TitleText = styled.h1`
  font-family: "Dancing Script", cursive;
`

const TitleContainer = styled.header`
  display: flex;
  padding: 15px 10px;
`

export default Title
