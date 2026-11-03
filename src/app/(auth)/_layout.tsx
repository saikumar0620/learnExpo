import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Slot } from 'expo-router'

export default function AuthLayout() {
  return (
    <View style={styles.container}>
      <Text>AuthLayout</Text>
      <Image source={require("@/assets/images/icon.png")} style={styles.image} />
      <Slot />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: 100,
    height: 100,
  },
})