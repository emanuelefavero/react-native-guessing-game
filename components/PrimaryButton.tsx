import { Pressable, Text, StyleSheet } from 'react-native'
import { colors } from '@/styles/colors'

interface Props {
  children: string
  onPress?: () => void
}

export default function PrimaryButton({ children, onPress }: Props) {
  return (
    <Pressable
      onPress={onPress}
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
    backgroundColor: colors.buttonBackground,
    borderRadius: 30,
    paddingVertical: 12,
    paddingHorizontal: 30,
    shadowColor: colors.buttonShadow,
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
