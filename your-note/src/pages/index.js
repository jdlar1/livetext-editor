import React from "react"
import styled from "styled-components"

import Seo from "../components/seo"
import Title from "../components/Editor/Title"
import CustomEditor from "../components/Editor/CustomEditor"
import ToolBar from "../components/Editor/ToolBar"

const IndexPage = () => (
  <>
    <Seo title="Home" />
    <Wrapper>
      <MaxWidthContainer>
        <Title />
        <CustomEditor />
        <ToolBar />
      </MaxWidthContainer>
    </Wrapper>
  </>
)

const Wrapper = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  width: 100%;
  height: 100%;
  min-height: 100vh;
  background-color: #efefef;
  align-items: center;
  padding-bottom: 80px;
`

const MaxWidthContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 900px;
  height: 100%;
`

export default IndexPage
