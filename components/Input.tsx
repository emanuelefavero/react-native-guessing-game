import { TextInput, StyleSheet } from 'react-native'

interface Props {
  inputNumber: string
  onChangeText: (text: string) => void
}

export default function Input({ inputNumber, onChangeText }: Props) {
  return (
    <TextInput
      value={inputNumber}
      onChangeText={onChangeText}
      style={styles.input}
      keyboardType='numeric'
      keyboardAppearance='dark'
      placeholder='Type a number'
      placeholderTextColor='#FDA4AF'
    />
  )
}

const styles = StyleSheet.create({
  input: {
    paddingVertical: 6,
    fontSize: 30,
    borderBottomColor: '#FFE4E6',
    color: '#FFE4E6',
    borderBottomWidth: 1.2,
    marginBottom: 30,
    maxWidth: 215,
  },
})
