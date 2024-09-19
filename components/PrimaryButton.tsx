import { Pressable, Text, StyleSheet } from 'react-native'

export default function PrimaryButton({ children }: { children: string }) {
  return (
    <Pressable
      style={({ pressed }) => [
        styles.button,
        { transform: [{ scale: pressed ? 0.95 : 1 }] },
      ]}
    >
      <Text style={styles.buttonText}>{children}</Text>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#9F1239',
    borderRadius: 30,
    paddingVertical: 12,
    paddingHorizontal: 30,
    shadowColor: '#4C0519',
    shadowOffset: { width: 3, height: 3 },
    shadowOpacity: 0.8,
    shadowRadius: 0.5,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    textTransform: 'uppercase',
  },
})
