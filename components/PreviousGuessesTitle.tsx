import { Text, StyleSheet } from 'react-native'

export default function PreviousGuessesTitle() {
  return (
    <Text style={styles.title}>
      Guesses: <Text style={styles.numberOfGuesses}>3</Text>
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
  },

  numberOfGuesses: {
    color: '#FDE047',
  },
})
