import { View, Text, StyleSheet } from 'react-native'
import { colors } from '@/styles/colors'

interface Props {
  item: {
    id: string
    value: number
    sign: string
  }
}

export default function PreviousGuess({ item }: Props) {
  return (
    <View style={styles.container}>
      <View style={styles.circle}>
        <Text style={styles.text}>{item.value}</Text>
      </View>

      <Text
        style={[
          styles.sign,
          {
            color: item.sign === '+' ? '#16A34A' : '#F59E0B',
          },
        ]}
      >
        {item.sign}
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },

  circle: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: colors.circle.background,
    borderColor: colors.circle.border,
    borderWidth: 1.1,
    shadowColor: colors.circle.shadow,
    shadowOffset: {
      width: 1,
      height: 2,
    },
    shadowOpacity: 1,
    shadowRadius: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  text: {
    color: colors.circle.text,
    fontSize: 24,
    textAlign: 'center',
  },

  sign: {
    fontSize: 24,
    fontWeight: 'bold',
    textShadowColor: colors.circle.shadow,
    textShadowOffset: {
      width: 1,
      height: 2,
    },
    textShadowRadius: 0.5,
  },
})
