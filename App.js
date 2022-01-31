import React from "react"
import {
  ApplicationProvider,
  IconRegistry,
  Layout,
} from "@ui-kitten/components"
import { EvaIconsPack } from "@ui-kitten/eva-icons"
import * as eva from "@eva-design/eva"
import DisplayAnImageWithStyle from "./components/MemeImage"

/**
 * Use any valid `name` property from eva icons (e.g `github`, or `heart-outline`)
 * https://akveo.github.io/eva-icons
 */
// const HeartIcon = props => <Icon {...props} name="heart" />

export default () => (
  <>
    <IconRegistry icons={EvaIconsPack} />
    <ApplicationProvider {...eva} theme={eva.light}>
      <Layout>
        <DisplayAnImageWithStyle />
      </Layout>
    </ApplicationProvider>
  </>
)
