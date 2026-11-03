import { Text, View, StyleSheet } from "react-native";
import{Link} from "expo-router";

export default function Index() {
  return (
    <View style={styles.container}>
      <Text>Home page</Text>
      <Link href="/about">About</Link>
      <Link href="/profile">Profile</Link>
      <Link href="/products">Products</Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
