import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

export default function customNotFoundRoute() {
  return (
    <View style={styles.container}>
      <Text>customNotFoundRoute</Text>
      <Link href="/">go to home</Link>
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