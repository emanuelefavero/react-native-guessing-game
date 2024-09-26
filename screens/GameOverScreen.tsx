import { View, Button, Image, StyleSheet } from 'react-native'
import { globalStyles } from '@/styles/globalStyles'
import { GameOverScreenProps } from '@/types/screens'
import { useNumberDispatch } from '@/context/NumberContext'

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

      <View
        style={{
          marginBottom: 6,
        }}
      >
        <Button
          title='Restart Game'
          onPress={handleRestartGame}
          color='#fef9c3'
        />
      </View>
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
