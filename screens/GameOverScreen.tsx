import { Text, View, Button } from 'react-native'
import { globalStyles } from '@/styles/globalStyles'
import { GameOverScreenProps } from '@/types/screens'
import { useGameDispatch } from '@/context/GameStateContext'

export default function GameOverScreen({ navigation }: GameOverScreenProps) {
  const gameDispatch = useGameDispatch()

  return (
    <View style={globalStyles.screenContainer}>
      <Text>Game Over Screen</Text>
      <Button
        title='Restart Game'
        onPress={() => {
          gameDispatch({ type: 'setGameState', payload: 'start' })
        }}
      />
    </View>
  )
}
