import { View, Button } from 'react-native'
import { globalStyles } from '@/styles/globalStyles'
import { GameScreenProps } from '@/types/screens'
import Title from '@/components/Title'
import GuessedNumber from '@/components/GuessedNumber'
import ButtonsContainer from '@/components/ButtonsContainer'
import PrimaryButton from '@/components/PrimaryButton'
import PreviousGuesses from '@/components/PreviousGuesses'

export default function StartGameScreen({ navigation }: GameScreenProps) {
  return (
    <View style={globalStyles.screenContainer}>
      <Title>
        Is your number lower or higher than <GuessedNumber />?
      </Title>

      {/* Add some space between the title and the buttons to make StartGameScreen and GameScreen buttons position consistent */}
      <View style={{ marginBottom: 12 }} />

      <ButtonsContainer>
        <PrimaryButton onPress={() => alert('lower')}>Lower</PrimaryButton>
        <PrimaryButton onPress={() => alert('higher')}>Higher</PrimaryButton>
      </ButtonsContainer>

      <PreviousGuesses />
      <Button
        title='Finish Game'
        onPress={() => navigation.navigate('GameOver')}
      />
    </View>
  )
}
