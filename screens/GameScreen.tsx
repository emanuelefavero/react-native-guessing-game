import { useEffect } from 'react'
import { View, Button, Alert } from 'react-native'
import { globalStyles } from '@/styles/globalStyles'
import { GameScreenProps } from '@/types/screens'
import Title from '@/components/Title'
import GuessedNumber from '@/components/GuessedNumber'
import ButtonsContainer from '@/components/ButtonsContainer'
import PrimaryButton from '@/components/PrimaryButton'
import PreviousGuesses from '@/components/PreviousGuesses'
import { useNumber, useNumberDispatch } from '@/context/NumberContext'

export default function StartGameScreen({ navigation }: GameScreenProps) {
  const { guess, found, target } = useNumber()
  const dispatch = useNumberDispatch()

  useEffect(() => {
    if (found) {
      navigation.navigate('GameOver')
    }
  }, [found, navigation])

  const handleLower = () => {
    if (guess === target) {
      navigation.navigate('GameOver')
      return
    } else if (guess < target) {
      Alert.alert('You are cheating!', 'Please press Higher', [
        { text: 'Sorry!', style: 'cancel' },
      ])
      return
    }

    dispatch({ type: 'lower' })
  }

  const handleHigher = () => {
    if (guess === target) {
      navigation.navigate('GameOver')
      return
    } else if (guess > target) {
      Alert.alert('You are cheating!', 'Please press Lower', [
        { text: 'Sorry!', style: 'cancel' },
      ])
      return
    }

    dispatch({ type: 'higher' })
  }

  return (
    <View style={globalStyles.screenContainer}>
      <Title>
        Is your number lower or higher than <GuessedNumber />?
      </Title>

      {/* Add some space between the title and the buttons to make StartGameScreen and GameScreen buttons position consistent */}
      <View style={{ marginBottom: 12 }} />

      <ButtonsContainer>
        <PrimaryButton onPress={handleLower}>Lower</PrimaryButton>
        <PrimaryButton onPress={handleHigher}>Higher</PrimaryButton>
      </ButtonsContainer>

      <PreviousGuesses />
      <View
        style={{
          marginBottom: 6,
        }}
      >
        <Button
          title='End Game Now'
          onPress={() => navigation.navigate('GameOver')}
          color='#fef9c3'
        />
      </View>
    </View>
  )
}
