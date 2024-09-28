import { Text, StyleSheet } from 'react-native'
import { useNumber } from '@/context/NumberContext'
import { colors } from '@/styles/colors'
import { font } from '@/styles/font'

export default function GuessedNumber() {
  const { guess } = useNumber()
  return <Text style={styles.text}>{guess}</Text>
}

const styles = StyleSheet.create({
  text: {
    fontSize: font.sizes.xxl,
    color: colors.primary,
  },
})
