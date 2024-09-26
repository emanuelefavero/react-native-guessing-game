import { View, Button, Image, StyleSheet } from 'react-native'
import { globalStyles } from '@/styles/globalStyles'
import { GameOverScreenProps } from '@/types/screens'
import { useNumberDispatch } from '@/context/NumberContext'
import Title from '@/components/Title'
import GuessedNumber from '@/components/GuessedNumber'
import PrimaryButton from '@/components/PrimaryButton'
import FinalGuesses from '@/components/FinalGuesses'

export default function GameOverScreen({ navigation }: GameOverScreenProps) {
  const numberDispatch = useNumberDispatch()

  const handleRestartGame = () => {
    numberDispatch({ type: 'reset' })
    navigation.navigate('StartGame')
  }

  return (
    <View style={globalStyles.screenContainer}>
      <Image
        style={styles.gameOverImage}
        source={require('@/assets/images/game-over.png')}
      />

      <Title>
        Your number is <GuessedNumber />!
      </Title>

      <FinalGuesses />

      <PrimaryButton onPress={handleRestartGame}>Play Again</PrimaryButton>
    </View>
  )
}

const styles = StyleSheet.create({
  gameOverImage: {
    width: 200,
    height: 200,
    marginBottom: 20,
  },
})
