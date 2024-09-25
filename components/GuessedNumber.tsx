import { Text, StyleSheet } from 'react-native'
import { useNumber } from '@/context/NumberContext'

export default function GuessedNumber() {
  const { target } = useNumber()
  return <Text style={styles.text}>{target}</Text>
}

const styles = StyleSheet.create({
  text: {
    fontSize: 54,
    color: '#FDE047',
  },
})
