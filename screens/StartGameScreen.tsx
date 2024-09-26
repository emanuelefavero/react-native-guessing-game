import { View, Alert } from 'react-native'
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
    inputNumberDispatch({ type: 'reset' })
  }

  const handleConfirm = () => {
    // Validate input
    if (
      inputNumber === '' || // empty
      parseInt(inputNumber) < 1 || // less than 1
      parseInt(inputNumber) > 100 || // greater than 100
      isNaN(parseInt(inputNumber)) || // not a number
      parseInt(inputNumber) % 1 !== 0 // not an integer
    ) {
      Alert.alert('Invalid input', 'Please enter a number between 1 and 100', [
        { text: 'OK' },
      ])
      return
    }

    numberDispatch({ type: 'set_target', payload: parseInt(inputNumber) })
    resetInput()
    navigation.navigate('Game')
  }

  return (
    <View style={globalStyles.screenContainer}>
      <Title>Guess My Number</Title>

      <Input />

      <ButtonsContainer>
        <PrimaryButton onPress={resetInput}>Reset</PrimaryButton>
        <PrimaryButton onPress={handleConfirm}>Confirm</PrimaryButton>
      </ButtonsContainer>
    </View>
  )
}
