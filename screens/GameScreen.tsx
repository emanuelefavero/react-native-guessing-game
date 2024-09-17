import { Text, View, Button } from 'react-native'
import { globalStyles } from '@/styles/globalStyles'

export default function StartGameScreen({ navigation }: any) {
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
