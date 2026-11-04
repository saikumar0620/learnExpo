import { Text, View, StyleSheet,Pressable } from "react-native";
import{Link} from "expo-router";

export default function Index() {
  return (
    <View style={styles.container}>
      <Text>Home page</Text>
      <Link href="/about">About</Link>
      <Link href="/profile">Profile</Link>
      <Link href="/products">Products</Link>
      <Link href="/login">login</Link>


      <Link href="/products/bestseller/playstation-6" asChild>
        <Pressable>
          <View style={styles.button}>
            <Text style={styles.buttonText}>
              playstation
            </Text>
          </View>
        </Pressable>
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  link: {
    fontSize: 16,
    color: 'blue',
  },
  button: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
});
