import { Text, StyleSheet } from 'react-native'
import { useNumber } from '@/context/NumberContext'

export default function GuessedNumber() {
  const { guess } = useNumber()
  return <Text style={styles.text}>{guess}</Text>
}

const styles = StyleSheet.create({
  text: {
    fontSize: 54,
    color: '#FDE047',
  },
})
