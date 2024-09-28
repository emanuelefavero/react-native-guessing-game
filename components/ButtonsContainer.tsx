import { ReactNode } from 'react'
import { View, StyleSheet } from 'react-native'
import { maxWidth } from '@/styles/maxWidth'

export default function ButtonsContainer({
  children,
}: {
  children: ReactNode
}) {
  return <View style={styles.buttonsContainer}>{children}</View>
}

const styles = StyleSheet.create({
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    maxWidth: maxWidth.buttons,
    marginBottom: 36,
  },
})
