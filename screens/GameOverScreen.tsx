import { Text, View, Button } from 'react-native'
import { globalStyles } from '@/styles/globalStyles'
import { GameOverScreenProps } from '@/types/screens'

export default function GameOverScreen({ navigation }: GameOverScreenProps) {
  return (
    <View style={globalStyles.screenContainer}>
      <Text>Game Over Screen</Text>

      <Button
        title='Restart Game'
        onPress={() => navigation.navigate('StartGame')}
      />
    </View>
  )
}
