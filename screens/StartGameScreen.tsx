import { View, StyleSheet } from 'react-native'
import { globalStyles } from '@/styles/globalStyles'
import { useNumberDispatch } from '@/context/NumberContext'
import {
  useInputNumber,
  useInputNumberDispatch,
} from '@/context/InputNumberContext'
import { StartGameScreenProps } from '@/types/screens'
import PrimaryButton from '@/components/PrimaryButton'
import Title from '@/components/Title'
import ButtonsContainer from '@/components/ButtonsContainer'
import Input from '@/components/Input'

export default function StartGameScreen({ navigation }: StartGameScreenProps) {
  const numberDispatch = useNumberDispatch()
  const { inputNumber } = useInputNumber()
  const inputNumberDispatch = useInputNumberDispatch()

  const resetInput = () => {
    inputNumberDispatch({ type: 'setInputNumber', payload: '' })
  }

  const handleConfirm = () => {
    // Validate input
    // TODO: Add a toast message for invalid input
    if (inputNumber === '') return
    if (parseInt(inputNumber) < 1 || parseInt(inputNumber) > 100) return
    if (isNaN(parseInt(inputNumber))) return
    if (parseInt(inputNumber) % 1 !== 0) return

    numberDispatch({ type: 'setNumber', payload: parseInt(inputNumber) })
    resetInput()
    navigation.navigate('Game')
  }

  return (
    <View style={globalStyles.screenContainer}>
      <Title>Guess My Number</Title>

      <Input />

      <ButtonsContainer>
        <PrimaryButton onPress={() => resetInput()}>Reset</PrimaryButton>

        <PrimaryButton onPress={handleConfirm}>Confirm</PrimaryButton>
      </ButtonsContainer>
    </View>
  )
}
