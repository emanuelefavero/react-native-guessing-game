import { TextInput, StyleSheet } from 'react-native'
import {
  useInputNumber,
  useInputNumberDispatch,
} from '@/context/InputNumberContext'

export default function Input() {
  const { inputNumber } = useInputNumber()
  const inputNumberDispatch = useInputNumberDispatch()

  return (
    <TextInput
      value={inputNumber}
      onChangeText={(text) =>
        inputNumberDispatch({
          type: 'set',
          payload: text.replace(/[^0-9]/g, ''),
        })
      }
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
