import { Text, View, Button } from 'react-native'
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
      <Text>Game Over Screen</Text>

      <Button title='Restart Game' onPress={handleRestartGame} />
    </View>
  )
}
