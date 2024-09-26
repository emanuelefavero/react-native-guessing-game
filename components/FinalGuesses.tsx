import { Text, StyleSheet } from 'react-native'
import { useNumber } from '@/context/NumberContext'

export default function FinalGuesses() {
  const { previousGuesses } = useNumber()

  return (
    <Text style={styles.title}>
      I found your number in{' '}
      <Text style={styles.numberOfGuesses}>{previousGuesses.length + 1}</Text>{' '}
      {previousGuesses.length + 1 === 1 ? 'guess' : 'guesses'} 🎉
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
    maxWidth: 300,
  },

  numberOfGuesses: {
    color: '#FDE047',
  },
})
