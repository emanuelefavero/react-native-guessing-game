import { View, Text, StyleSheet } from 'react-native'

export default function Title() {
  return (
    <View style={styles.titleContainer}>
      <Text style={styles.title}>Guess the number</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  titleContainer: {
    width: '100%',
    maxWidth: 360,
    marginBottom: 40,
  },

  title: {
    color: '#FFE4E6',
    fontSize: 48,
    fontWeight: 'bold',
    textAlign: 'center',
  },
})
