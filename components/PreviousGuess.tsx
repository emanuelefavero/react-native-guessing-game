import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

interface Props {
  item: {
    id: string
    value: number
  }
}

export default function PreviousGuess({ item }: Props) {
  return (
    <View style={styles.circle}>
      <Text style={styles.text}>{item.value}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  circle: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#A16207',
    justifyContent: 'center',
    alignItems: 'center',
  },

  text: {
    color: '#fef9c3',
    fontSize: 24,
    textAlign: 'center',
  },
})
