import { View, StyleSheet } from 'react-native'
import PreviousGuess from '@/components/PreviousGuess'

export default function PreviousGuessesList() {
  const previousGuesses = [
    { id: '1', value: 50, sign: '-' },
    { id: '2', value: 75, sign: '+' },
  ]

  return (
    <View style={styles.list}>
      {previousGuesses.map((item) => (
        <PreviousGuess key={item.id} item={item} />
      ))}
    </View>
  )
}

const styles = StyleSheet.create({
  list: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: 14,
    marginBottom: 60,
  },
})
