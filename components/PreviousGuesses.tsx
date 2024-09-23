import React from 'react'
import { Text, StyleSheet } from 'react-native'
import ScrollCard from '@/components/ScrollCard'

export default function PreviousGuesses() {
  return (
    <ScrollCard>
      <Text style={styles.title}>
        Guesses: <Text style={styles.numberOfGuesses}>3</Text>
      </Text>
    </ScrollCard>
  )
}

const styles = StyleSheet.create({
  title: {
    color: '#FFE4E6',
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
  },

  numberOfGuesses: {
    color: '#FDE047',
  },
})
