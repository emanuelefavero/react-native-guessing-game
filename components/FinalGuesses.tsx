import { Text, StyleSheet } from 'react-native'
import { useNumber } from '@/context/NumberContext'
import { colors } from '@/styles/colors'
import { font } from '@/styles/font'
import { maxWidth } from '@/styles/maxWidth'

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
    fontSize: font.sizes.medium,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 30,
    maxWidth: maxWidth.text,
  },

  numberOfGuesses: {
    color: colors.primary,
  },
})
