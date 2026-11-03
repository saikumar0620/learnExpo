import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useLocalSearchParams } from "expo-router"


export default function catchAllProductDetail() {
  const {rest} = useLocalSearchParams<{rest: string[]}>()
  return (
    <View style={styles.container}>
      <Text>catch All ProductDetail  </Text>
      <Text>details about product at {rest.join(" / ")}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
})