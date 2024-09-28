import { StyleSheet } from 'react-native'
import { colors } from '@/styles/colors'

export const globalStyles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    backgroundColor: colors.background,
    alignItems: 'center',
    // justifyContent: 'flex-start',
    paddingHorizontal: 20,
    paddingBottom: 20,
    paddingTop: 100,
  },
})
