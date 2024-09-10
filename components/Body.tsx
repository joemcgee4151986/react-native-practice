import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet} from 'react-native';

const HelloWorld: React.FC= () => {
  // Define a state variable to store the message
  const [message, setMessage] = useState('Loading...');

  // Fetch the message from the API when the component mounts
  useEffect(() => {
    fetch('https://test-tqyj.onrender.com/test')
      .then((response: Response) => response.json())
      .then((data:{ message: string}) => {
        // Update the state with the fetched message
        setMessage(data.message);
      })
      .catch((error: Error) => {
        console.error('Error', error);
        setMessage('Error');
      });
  }, []); // Empty dependency array means this effect runs once on mount

  return (
    <View style={styles.container}>
      <Text style={styles.messageText}>{message}</Text>
      <Text style={styles.messageWords}>rofl</Text>
    </View>
  );
};

// Styles for the component
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  messageText: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    color: 'blue'
  },
  messageWords: {
    fontSize: 130,
    textAlign: 'right',
    margin: 15,

    color: 'red'
  }
});

export default HelloWorld;