import { Text, StyleSheet } from 'react-native'
import { useNumber } from '@/context/NumberContext'

export default function PreviousGuessesTitle() {
  const { previousGuesses } = useNumber()

  return (
    <Text style={styles.title}>
      Guesses:{' '}
      <Text style={styles.numberOfGuesses}>{previousGuesses.length + 1}</Text>
    </Text>
  )
}

const styles = StyleSheet.create({
  title: {
    color: '#FFE4E6',
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 30,
  },

  numberOfGuesses: {
    color: '#FDE047',
  },
})
