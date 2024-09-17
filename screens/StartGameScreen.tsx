import { Text, View, Button } from 'react-native'
import { globalStyles } from '@/styles/globalStyles'

export default function StartGameScreen({ navigation }: any) {
  return (
    <View style={globalStyles.container}>
      <Text>Start Game Screen</Text>
      <Button title='Start Game' onPress={() => navigation.navigate('Game')} />
    </View>
  )
}
