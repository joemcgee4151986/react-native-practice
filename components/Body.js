
import { StyleSheet, Text, View } from 'react-native';
export default function Body() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app! Nope</Text>
    
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'green',
    alignItems: 'center',
justifyContent: 'center',
  },
});
