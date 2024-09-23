import { Text, StyleSheet } from 'react-native'
import { useNumber } from '@/context/NumberContext'

export default function GuessedNumber() {
  const { number } = useNumber()
  return <Text style={styles.text}>{number}</Text>
}

const styles = StyleSheet.create({
  text: {
    fontSize: 54,
    color: '#FDE047',
  },
})
