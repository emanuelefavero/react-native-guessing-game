import { View, StyleSheet } from 'react-native'
import ScrollCard from './ScrollCard'
import PreviousGuessesTitle from './PreviousGuessesTitle'
import PreviousGuess from './PreviousGuess'

export default function PreviousGuesses() {
  const previousGuesses = [
    { id: '1', value: 50, sign: '-' },
    { id: '2', value: 75, sign: '+' },
  ]

  return (
    <ScrollCard>
      <PreviousGuessesTitle />
      <View style={styles.container}>
        {previousGuesses.map((item) => (
          <PreviousGuess key={item.id} item={item} />
        ))}
      </View>
    </ScrollCard>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: 14,
    marginBottom: 60,
  },
})
