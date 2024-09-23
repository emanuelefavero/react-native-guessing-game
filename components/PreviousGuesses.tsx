import React from 'react'
import { Text, StyleSheet, FlatList } from 'react-native'

export default function PreviousGuesses() {
  const previousGuesses = [
    { id: '1', value: 50 },
    { id: '2', value: 75 },
  ]

  return (
    <FlatList
      alwaysBounceVertical={false}
      style={styles.previousGuesses}
      data={previousGuesses}
      renderItem={({ item }) => (
        <Text style={styles.previousGuess}>{item.value}</Text>
      )}
      keyExtractor={(item) => item.id.toString()}
      ListHeaderComponent={
        <Text style={styles.title}>
          Guesses: <Text style={styles.numberOfGuesses}>3</Text>
        </Text>
      }
    />
  )
}

const styles = StyleSheet.create({
  previousGuesses: {
    width: '100%',
    backgroundColor: 'rgba(76, 5, 25, 0.1)',
    borderColor: 'rgba(76, 5, 25, 0.2)',
    borderWidth: 1.2,
    borderRadius: 16,
    paddingVertical: 48,
    marginBottom: 12,
  },

  title: {
    color: '#FFE4E6',
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 24,
  },

  numberOfGuesses: {
    color: '#FDE047',
  },

  previousGuess: {
    color: '#FDE047',
    fontSize: 24,
    textAlign: 'center',
  },
})
