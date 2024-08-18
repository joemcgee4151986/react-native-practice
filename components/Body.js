import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, Image } from 'react-native';

const HelloWorld = () => {
  // Define a state variable to store the message
  const [message, setMessage] = useState('Loading...');

  // Fetch the message from the API when the component mounts
  useEffect(() => {
    fetch('https://test-tqyj.onrender.com/test')
      .then(response => response.json())
      .then(data => {
        // Update the state with the fetched message
        setMessage(data.message);
      })
      .catch(error => {
        console.error('Error fetching the message:', error);
        setMessage('Error fetching the message');
      });
  }, []); // Empty dependency array means this effect runs once on mount

  return (
    <View style={styles.container}>
      <Text style={styles.messageText}>{message}</Text>
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
});

export default HelloWorld;