import React, { createContext, useState } from "react"
import { EditorState } from "draft-js"

const initialState = {}
const editorStore = createContext(initialState)
const { Provider } = editorStore

const EditorProvider = ({ children }) => {
  const [editorState, setEditorState] = useState(EditorState.createEmpty())

  return <Provider value={{ editorState, setEditorState }}>{children}</Provider>
}

export { editorStore, EditorProvider }
