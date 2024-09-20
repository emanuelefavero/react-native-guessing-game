import { Text, View, Button, StyleSheet } from 'react-native'
import { globalStyles } from '@/styles/globalStyles'
import { useNumber } from '@/context/NumberContext'
import { useGameDispatch } from '@/context/GameStateContext'
import { GameScreenProps } from '@/types/screens'
import Title from '@/components/Title'

export default function StartGameScreen({ navigation }: GameScreenProps) {
  const { number } = useNumber()
  const gameDispatch = useGameDispatch()

  return (
    <View style={globalStyles.screenContainer}>
      <Title>Your number is {number}</Title>
      <Button
        title='Finish Game'
        onPress={() => {
          gameDispatch({ type: 'setGameState', payload: 'over' })
        }}
      />
    </View>
  )
}
