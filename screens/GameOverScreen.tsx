import { Text, View, Button } from 'react-native'
import { globalStyles } from '@/styles/globalStyles'

export default function GameOverScreen({ navigation }: any) {
  return (
    <View style={globalStyles.container}>
      <Text>Game Over Screen</Text>
      <Button
        title='Restart Game'
        onPress={() => navigation.navigate('StartGame')}
      />
    </View>
  )
}
