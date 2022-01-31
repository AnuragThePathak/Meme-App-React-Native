import React, { useEffect, useState } from "react"
import { View, Image, ActivityIndicator } from "react-native"
import { StyleSheet } from "react-native"

const DisplayAnImageWithStyle = () => {
  const [memeData, setMemeData] = useState("")
  const [isLoading, setIsLoading] = useState(true)
  const URL = "https://meme-api.herokuapp.com/gimme"

  useEffect(() => {
    fetch(URL)
      .then((res) => res.json()).
      then((jsonData) => {
        setMemeData(jsonData.url)
        console.log(jsonData.url)
      }).
      catch((e) => console.error(e)).
      finally(() => setIsLoading(false))
  }, [URL])

  return (
    <View>
      {isLoading ? <ActivityIndicator /> :
        <Image source={{
          uri: memeData,
        }} resizeMode="contain" style={styles.image} resizeMethod="scale" />}
    </View>)
}

const styles = StyleSheet.create({
  image: {
    width: 310,
    height: 350,
  },
})

export default DisplayAnImageWithStyle
