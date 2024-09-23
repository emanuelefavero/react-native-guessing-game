import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

interface Props {
  item: {
    id: string
    value: number
    sign: string
  }
}

export default function PreviousGuess({ item }: Props) {
  return (
    <View style={styles.container}>
      <View style={styles.circle}>
        <Text style={styles.text}>{item.value}</Text>
      </View>

      <Text
        style={[
          styles.sign,
          {
            color: item.sign === '+' ? '#16A34A' : '#F59E0B',
          },
        ]}
      >
        {item.sign}
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },

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

  sign: {
    fontSize: 24,
    fontWeight: 'bold',
  },
})
