import { ReactNode } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { colors } from '@/styles/colors'
import { font } from '@/styles/font'

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
            fontSize: fontSize || font.sizes.xxl,
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
    color: colors.text,
    fontFamily: 'Lobster',
    fontWeight: 'bold',
    textAlign: 'center',
  },
})
