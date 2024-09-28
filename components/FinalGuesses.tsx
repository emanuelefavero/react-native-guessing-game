import { Text, StyleSheet } from 'react-native'
import { useNumber } from '@/context/NumberContext'
import { colors } from '@/styles/colors'

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
    color: colors.text,
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
