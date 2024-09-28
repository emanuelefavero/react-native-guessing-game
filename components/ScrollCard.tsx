import { ReactNode } from 'react'
import { ScrollView, StyleSheet } from 'react-native'
import { colors } from '@/styles/colors'

export default function ScrollCard({ children }: { children: ReactNode }) {
  return (
    <ScrollView style={styles.card} alwaysBounceVertical={false}>
      {children}
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  card: {
    width: '100%',
    backgroundColor: colors.shadow.light,
    borderColor: colors.shadow.medium,
    borderWidth: 1.2,
    borderRadius: 16,
    paddingVertical: 40,
    marginBottom: 12,
  },
})
