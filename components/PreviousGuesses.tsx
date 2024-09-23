import { View, ScrollView, Text, StyleSheet } from 'react-native'
import PreviousGuessesTitle from './PreviousGuessesTitle'
import PreviousGuess from './PreviousGuess'

export default function PreviousGuesses() {
  const previousGuesses = [
    { id: '1', value: 50, sign: '-' },
    { id: '2', value: 75, sign: '+' },
  ]

  return (
    <ScrollView style={styles.card} alwaysBounceVertical={false}>
      <PreviousGuessesTitle />
      <View style={styles.container}>
        {previousGuesses.map((item) => (
          <PreviousGuess key={item.id} item={item} />
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

  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: 14,
    marginBottom: 60,
  },
})
