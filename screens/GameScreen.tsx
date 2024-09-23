import { View, Button } from 'react-native'
import { globalStyles } from '@/styles/globalStyles'
import { GameScreenProps } from '@/types/screens'
import Title from '@/components/Title'
import GuessedNumber from '@/components/GuessedNumber'
import ButtonsContainer from '@/components/ButtonsContainer'
import PrimaryButton from '@/components/PrimaryButton'

export default function StartGameScreen({ navigation }: GameScreenProps) {
  return (
    <View style={globalStyles.screenContainer}>
      <Title>
        Is your number lower or higher than <GuessedNumber />?
      </Title>

      <ButtonsContainer>
        <PrimaryButton onPress={() => alert('lower')}>Lower</PrimaryButton>
        <PrimaryButton onPress={() => alert('higher')}>Higher</PrimaryButton>
      </ButtonsContainer>

      <Button
        title='Finish Game'
        onPress={() => navigation.navigate('GameOver')}
      />
    </View>
  )
}
