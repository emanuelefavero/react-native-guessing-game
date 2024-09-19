import { Text, View, Button } from 'react-native'
import { globalStyles } from '@/styles/globalStyles'
import { useNumber } from '@/context/NumberContext'
import { GameScreenProps } from '@/types/screens'

export default function StartGameScreen({ navigation }: GameScreenProps) {
  const { number } = useNumber()

  return (
    <View style={globalStyles.screenContainer}>
      <Text>Your number is {number}</Text>
      <Button
        title='Finish Game'
        onPress={() => navigation.navigate('GameOver')}
      />
    </View>
  )
}
