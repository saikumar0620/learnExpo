import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

export default function ProductList() {
  return (
    <View style={styles.container}>
      <Text>ProductList</Text>
      <Link href="./1" >Product 1</Link>
      <Link href="/products/2">Product 2</Link>
      <Link href="/products/3">Product 3</Link>
      <Link href="/products/bestseller/playstation-5">playstation-5 (bestseller)</Link>
      <Link href="/missingroute">missing test route (BESTSWLLER-1) </Link>
      
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