import { View, Button, StyleSheet } from 'react-native'
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

      {/* Add some space between the title and the buttons to make StartGameScreen and GameScreen buttons position consistent */}
      <View style={{ marginBottom: 12 }} />

      <ButtonsContainer>
        <PrimaryButton onPress={() => alert('lower')}>Lower</PrimaryButton>
        <PrimaryButton onPress={() => alert('higher')}>Higher</PrimaryButton>
      </ButtonsContainer>

      <View style={styles.previousGuesses}>
        <Button
          title='Finish Game'
          onPress={() => navigation.navigate('GameOver')}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  previousGuesses: {
    width: '100%',
    backgroundColor: 'rgba(76, 5, 25, 0.1)',
    borderColor: 'rgba(76, 5, 25, 0.2)',
    borderWidth: 1.2,
    borderRadius: 16,
    paddingVertical: 32,
  },
})
