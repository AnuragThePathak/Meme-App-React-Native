import { Button } from "@ui-kitten/components"
import React, { useEffect, useState } from "react"
import { View, Image, ActivityIndicator } from "react-native"
import { StyleSheet } from "react-native"

const DisplayAnImageWithStyle = () => {
  const [memeData, setMemeData] = useState("")
  const [isLoading, setIsLoading] = useState(true)
  const URL = "https://meme-api.herokuapp.com/gimme"

  function getData() {
    fetch(URL)
      .then((res) => res.json()).
      then((jsonData) => {
        setMemeData(jsonData.url)
        console.log(jsonData.url)
      }).
      catch((e) => console.error(e)).
      finally(() => setIsLoading(false))
  }

  useEffect(() => {
    getData()
  }, [URL])

  return (
    <View style={styles.container}>
      {isLoading ? <ActivityIndicator /> :
        <Image source={{
          uri: memeData,
        }} resizeMode="contain" style={styles.image} resizeMethod="scale"
         />}
        <Button style={styles.button} onPress={getData}>New meme</Button>
    </View>)
}

const styles = StyleSheet.create({
  container: {
    height: "100%",
    justifyContent: "space-between",
    padding: 10,
  },
  image: {
    width: 300,
    height: 350,
  },
  button: {
    alignSelf: "center",
    marginBottom: 20,
  },
})

export default DisplayAnImageWithStyle
