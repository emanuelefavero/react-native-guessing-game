import { ReactNode } from 'react'
import { ScrollView, StyleSheet } from 'react-native'

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
    backgroundColor: 'rgba(76, 5, 25, 0.1)',
    borderColor: 'rgba(76, 5, 25, 0.2)',
    borderWidth: 1.2,
    borderRadius: 16,
    paddingVertical: 40,
    marginBottom: 12,
  },
})
