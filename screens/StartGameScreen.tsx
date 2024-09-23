import { useState } from 'react'
import { View } from 'react-native'
import { globalStyles } from '@/styles/globalStyles'
import { useNumberDispatch } from '@/context/NumberContext'
import { StartGameScreenProps } from '@/types/screens'
import PrimaryButton from '@/components/PrimaryButton'
import Title from '@/components/Title'
import ButtonsContainer from '@/components/ButtonsContainer'
import Input from '@/components/Input'

export default function StartGameScreen({ navigation }: StartGameScreenProps) {
  const dispatch = useNumberDispatch()
  const [inputNumber, setInputNumber] = useState('')

  const handleConfirm = () => {
    // Validate input
    // TODO: Add a toast message for invalid input
    if (inputNumber === '') return
    if (parseInt(inputNumber) < 1 || parseInt(inputNumber) > 100) return
    if (isNaN(parseInt(inputNumber))) return
    if (parseInt(inputNumber) % 1 !== 0) return

    dispatch({ type: 'setNumber', payload: parseInt(inputNumber) })
    navigation.navigate('Game')
  }

  return (
    <View style={globalStyles.screenContainer}>
      <Title>Guess My Number</Title>

      <Input onChangeText={setInputNumber} inputNumber={inputNumber} />

      <ButtonsContainer>
        <PrimaryButton onPress={() => setInputNumber('')}>Reset</PrimaryButton>
        <PrimaryButton onPress={handleConfirm}>Confirm</PrimaryButton>
      </ButtonsContainer>
    </View>
  )
}
