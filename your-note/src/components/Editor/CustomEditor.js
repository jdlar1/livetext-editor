import React, { useContext } from "react"
import styled from "styled-components"
import { Editor, convertToRaw, convertFromRaw, EditorState } from "draft-js"

import { editorStore } from "../../providers/EditorProvider"
import { styleMap } from "./RichTextTools"
import socket from "../../providers/socket"

const CustomEditor = () => {
  const { editorState, setEditorState } = useContext(editorStore)

  const handleWriting = value => {
    let currentContent = value.getCurrentContent()
    let contentString = JSON.stringify(convertToRaw(currentContent))
    socket.emit("submit-changes", contentString)
    console.log('cambios enviados')

    setEditorState(value)
  }

  socket.on("broadcast-changes", data => {
    console.log('cambios recibidos')
    let newContent = convertFromRaw(JSON.parse(data))
    let newEditor = EditorState.createWithContent(newContent)

    setEditorState(newEditor)
    console.log('cambios aplicados')
  })

  return (
    <EditorContainer>
      <Editor
        editorState={editorState}
        onChange={handleWriting}
        customStyleMap={styleMap}
      />
    </EditorContainer>
  )
}

const EditorContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: white;
  box-shadow: 0px 3px 11px #00000085;
  min-height: 50px;

  border-radius: 8px;
  justify-content: stretch;
  padding: 8px;
`

export default CustomEditor
