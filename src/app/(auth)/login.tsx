import { StyleSheet, Text, View,Button } from 'react-native'
import React from 'react'
import { Link, router } from 'expo-router'
export default function Login() {
  return (
    <View style={styles.container}>
      <Text>Login</Text>
      <Link href="/register" relativeToDirectory>
        Don't have an account? Register
      </Link>
      <Button title="login" onPress={() =>router.replace("/profile")} />
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