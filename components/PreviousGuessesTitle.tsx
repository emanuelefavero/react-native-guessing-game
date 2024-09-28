import { Text, StyleSheet } from 'react-native'
import { useNumber } from '@/context/NumberContext'
import { colors } from '@/styles/colors'
import { font } from '@/styles/font'

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
    color: colors.text,
    fontSize: font.sizes.medium,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 30,
  },

  numberOfGuesses: {
    color: colors.primary,
  },
})
