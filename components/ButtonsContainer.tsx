import React from 'react'
import { View, StyleSheet } from 'react-native'

export default function ButtonsContainer({
  children,
}: {
  children: React.ReactNode
}) {
  return <View style={styles.buttonsContainer}>{children}</View>
}

const styles = StyleSheet.create({
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    maxWidth: 285,
  },
})
