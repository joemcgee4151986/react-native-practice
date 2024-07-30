import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Body() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const url = "https://jsonplaceholder.typicode.com/posts";

  useEffect(() => {
    fetch(url)
      .then((resp) => resp.json())
      .then((json) => setData(json))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);

  return (
    <View style={styles.container}>
      {loading ? (
        <Text>Loading...</Text>
      ) : (
        data.map((post) => (
          <View key={post.id} style={styles.item}>
            <Text style={styles.title}>{post.title}</Text>
            <Text>{post.body}</Text>
          </View>
        ))
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 15,
  },
  item: {
    backgroundColor: 'yellow',
    padding: 20,
    marginVertical: 18,
    borderRadius: 10,
  },
  title: {
    fontSize: 12,
    fontWeight: 'bold',
  },
});