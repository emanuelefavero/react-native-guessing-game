import { TextInput, StyleSheet } from 'react-native'
import {
  useInputNumber,
  useInputNumberDispatch,
} from '@/context/InputNumberContext'
import { colors } from '@/styles/colors'

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
    borderBottomColor: colors.primaryText,
    color: colors.primaryText,
    borderBottomWidth: 1.2,
    marginBottom: 30,
    maxWidth: 215,
  },
})
