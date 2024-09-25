import { View, StyleSheet } from 'react-native'
import PreviousGuess from '@/components/PreviousGuess'
import { useNumber } from '@/context/NumberContext'

export default function PreviousGuessesList() {
  const { previousGuesses } = useNumber()

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
