import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, Image } from 'react-native';

export default function Body() {
  const [pokemon, setPokemon] = useState(null);
  
  const [loading, setLoading] = useState(true);
 
  const getRandomPostId = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };
  useEffect(() => {
    const pokemonId =  getRandomPostId(1, 100) 
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`)
      .then((resp) => resp.json())
      .then((data) => setPokemon(data))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);
  const renderType = ({ item }) => (
    <View style={styles.typeContainer}>
      <Text style={styles.typeText}>{item.type.name}</Text>
    </View>
  );
  return (
    <View style={styles.container}>
      {loading ? (
        <Text>Loading...</Text>
      ) : (
        pokemon && (
          <View style={styles.pokemonContainer}>
            <Text style={styles.pokemonName}>{pokemon.name}</Text>
            <Image
              source={{ uri: pokemon.sprites.front_default }}
              style={styles.pokemonImage}
            />
            <FlatList
              data={pokemon.types}
              renderItem={renderType}
              keyExtractor={(item) => item.slot.toString()}
              style={styles.typeList}
              
            />
            
          </View>
        )
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
    backgroundColor: 'white'
  },
  pokemonContainer: {
    alignItems: 'center',
  },
  pokemonName: {
    fontSize: 34,
    fontWeight: 'bold',
    marginBottom: 16,

  },
  pokemonImage: {
    width: 100,
    height: 100,
    marginBottom: 16,
  },
  typeList: {
    marginTop: 8,
  },
  typeContainer: {
    backgroundColor: '#eee',
    padding: 8,
    marginVertical: 4,
    borderRadius: 4,
  },
  typeText: {
    fontSize: 18,
  },
});