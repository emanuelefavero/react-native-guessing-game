import { View, ScrollView, Text, StyleSheet } from 'react-native'
import PreviousGuessesTitle from './PreviousGuessesTitle'

export default function PreviousGuesses() {
  const previousGuesses = [
    { id: '1', value: 50 },
    { id: '2', value: 75 },
    { id: '3', value: 30 },
    { id: '4', value: 90 },
    { id: '5', value: 45 },
    { id: '6', value: 85 },
  ]

  return (
    <ScrollView style={styles.card} alwaysBounceVertical={false}>
      <PreviousGuessesTitle />
      <View style={styles.previousGuesses}>
        {previousGuesses.map((item) => (
          <View key={item.id} style={styles.previousGuessCircle}>
            <Text style={styles.previousGuessText}>{item.value}</Text>
          </View>
        ))}
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  card: {
    width: '100%',
    backgroundColor: 'rgba(76, 5, 25, 0.1)',
    borderColor: 'rgba(76, 5, 25, 0.2)',
    borderWidth: 1.2,
    borderRadius: 16,
    paddingVertical: 40,
    marginBottom: 12,
  },

  previousGuesses: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: 14,
  },

  previousGuessCircle: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#A16207',
    justifyContent: 'center',
    alignItems: 'center',
  },

  previousGuessText: {
    color: '#fef9c3',
    fontSize: 24,
    textAlign: 'center',
  },
})
