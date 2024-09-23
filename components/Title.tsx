import { ReactNode } from 'react'
import { View, Text, StyleSheet } from 'react-native'

interface Props {
  children: ReactNode
  fontSize?: number
}

export default function Title({ children, fontSize }: Props) {
  return (
    <View style={styles.titleContainer}>
      <Text
        style={[
          styles.title,
          {
            fontSize: fontSize || 54,
          },
        ]}
      >
        {children}
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  titleContainer: {
    width: '100%',
    maxWidth: 360,
    marginBottom: 36,
  },

  title: {
    color: '#FFE4E6',
    fontFamily: 'Lobster',
    fontWeight: 'bold',
    textAlign: 'center',
  },
})
