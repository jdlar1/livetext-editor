import React, { useContext } from "react"
import styled from "styled-components"

import { RichUtils } from "draft-js"

import { editorStore } from "../../providers/EditorProvider"

const RichTextTools = () => {
  return (
    <Wrapper>
      <FontStyling />
      <Divider />
      <ColorStyling />
    </Wrapper>
  )
}

const styleMap = {
  UNDELINE: {
    "text-decoration": "underline",
  },
  RED: {
    color: "red",
  },
  BLUE: {
    color: "blue",
  },
  GREEN: {
    color: "green",
  },
  YELLOW: {
    color: "yellow",
  },
}

const FontStyling = () => {
  const { setEditorState, editorState } = useContext(editorStore)

  const handleStyleClick = style => {
    setEditorState(RichUtils.toggleInlineStyle(editorState, style))
  }

  return (
    <>
      <LetterButton>
        <Letter style={{ fontWeight: 400 }}>A</Letter>
      </LetterButton>
      <LetterButton>
        <Letter
          style={{ textDecoration: "underline" }}
          onClick={() => handleStyleClick("UNDELINE")}
        >
          A
        </Letter>
      </LetterButton>
      <LetterButton onClick={() => handleStyleClick("ITALIC")}>
        <Letter style={{ fontStyle: "italic" }}>I</Letter>
      </LetterButton>
      <LetterButton onClick={() => handleStyleClick("BOLD")}>
        <Letter>B</Letter>
      </LetterButton>
    </>
  )
}

const ColorStyling = () => {
  const { setEditorState, editorState } = useContext(editorStore)

  const handleStyleClick = style => {
    setEditorState(RichUtils.toggleInlineStyle(editorState, style))
  }
  return (
    <>
      <ColorButton color="red" onClick={() => handleStyleClick("RED")} />
      <ColorButton color="blue" onClick={() => handleStyleClick("BLUE")} />
      <ColorButton color="green" onClick={() => handleStyleClick("GREEN")} />
      <ColorButton color="yellow" onClick={() => handleStyleClick("YELLOW")} />
    </>
  )
}

const Wrapper = styled.section`
  display: flex;
  height: 50%;
  align-items: center;
`

const Divider = styled.div`
  margin: 0 15px;
  border: gray solid 0.5px;
  min-height: 100%;
`

const LetterButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 30px;
  width: 30px;
  background-color: rgba(0, 0, 0, 0);
  border-radius: 50%;
  margin: 0 2px;
  cursor: pointer;

  &:hover {
    background-color: rgba(0, 0, 0, 0.3);
  }
`

const ColorButton = styled.div`
  display: flex;
  height: 20px;
  width: 20px;
  background-color: ${({ color }) => color};
  border-radius: 50%;
  margin: 0 4px;
  cursor: pointer;
  border: 1px solid black;
`

const Letter = styled.h4`
  padding: 0 6px;
`
export { styleMap }
export default RichTextTools
