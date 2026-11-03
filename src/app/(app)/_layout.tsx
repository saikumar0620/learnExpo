import { Slot } from "expo-router";

import { StyleSheet, Text, View } from 'react-native'
import{ SafeAreaView} from 'react-native-safe-area-context'

export default function RootLayout() {
  return(
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.text}>my expo app</Text>
      </View>
      <Slot />
      <View style={styles.footer}>
        <Text style={styles.footertext}>® saikumar</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  header: {
    height: 50,
    backgroundColor: 'lightblue',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  footer: {
    height: 50,
    backgroundColor: 'lightgray',
    alignItems: 'center',
    justifyContent: 'center',
  },
  footertext: {
    fontSize: 16,
    color: 'gray',
  },
});  
