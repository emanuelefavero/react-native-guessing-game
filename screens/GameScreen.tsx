import { Text, View, Button } from 'react-native'
import { globalStyles } from '@/styles/globalStyles'
import { GameScreenProps } from '@/types/screens'

export default function StartGameScreen({ navigation }: GameScreenProps) {
  return (
    <View style={globalStyles.container}>
      <Text>Game Screen</Text>
      <Button
        title='Finish Game'
        onPress={() => navigation.navigate('GameOver')}
      />
    </View>
  )
}
