/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/browser-apis/
 */

// You can delete this file if you're not using it
import React from "react"

import { EditorProvider } from "./src/providers/EditorProvider"
import GlobalStyles from "./src/components/GlobalStyles"

export const wrapRootElement = ({ element }) => (
  <EditorProvider>{element}</EditorProvider>
)

export const wrapPageElement = ({ element }) => (
  <>
    <GlobalStyles />
    {element}
  </>
)
