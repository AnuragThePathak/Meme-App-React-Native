import React from "react"
import { StyleSheet } from "react-native"
import {
  ApplicationProvider,
  Button,
  Icon,
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
const HeartIcon = props => <Icon {...props} name="heart" />

export default () => (
  <>
    <IconRegistry icons={EvaIconsPack} />
    <ApplicationProvider {...eva} theme={eva.light}>
      <Layout style={styles.container}>
        <DisplayAnImageWithStyle />
        <Button style={styles.likeButton} accessoryLeft={HeartIcon}>
          LIKE
        </Button>
      </Layout>
    </ApplicationProvider>
  </>
)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    textAlign: "center",
  },
  likeButton: {
    marginVertical: 16,
  },
  image: {
    width: 400,
    height: 400,
  },
})
