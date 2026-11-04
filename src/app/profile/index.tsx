import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Link,Redirect } from 'expo-router'

export default function Profile() {
  const isLoggedIn = false

  if (!isLoggedIn) {
    return <Redirect href="/login" />
  }
  
  return (
    <View style={styles.container}>
      <Text>Profile page </Text>
      <Link href="/">go to home</Link>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
})