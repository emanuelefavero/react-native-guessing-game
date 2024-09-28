import { TextInput, StyleSheet } from 'react-native'
import {
  useInputNumber,
  useInputNumberDispatch,
} from '@/context/InputNumberContext'
import { colors } from '@/styles/colors'
import { font } from '@/styles/font'
import { maxWidth } from '@/styles/maxWidth'

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
      placeholderTextColor={colors.input.placeholder}
    />
  )
}

const styles = StyleSheet.create({
  input: {
    paddingVertical: 6,
    fontSize: font.sizes.large,
    borderBottomColor: colors.input.border,
    color: colors.input.text,
    borderBottomWidth: 1.2,
    marginBottom: 30,
    maxWidth: maxWidth.input,
  },
})
