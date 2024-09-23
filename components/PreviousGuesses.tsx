import React from 'react'
import { ScrollView, Text, StyleSheet } from 'react-native'

export default function PreviousGuesses() {
  return (
    <ScrollView style={styles.previousGuesses} alwaysBounceVertical={false}>
      <Text style={styles.previousGuessesTitle}>
        Guesses: <Text style={styles.numberOfGuesses}>3</Text>
      </Text>
    </ScrollView>
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

  previousGuessesTitle: {
    color: '#FFE4E6',
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
  },

  numberOfGuesses: {
    color: '#FDE047',
  },
})
