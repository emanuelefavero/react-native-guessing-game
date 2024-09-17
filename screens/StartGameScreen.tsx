import { Text, View, Button } from 'react-native'
import { globalStyles } from '@/styles/globalStyles'
import { StartGameScreenProps } from '@/types/screens'

export default function StartGameScreen({ navigation }: StartGameScreenProps) {
  return (
    <View style={globalStyles.container}>
      <Text>Start Game Screen</Text>
      <Button title='Start Game' onPress={() => navigation.navigate('Game')} />
    </View>
  )
}
