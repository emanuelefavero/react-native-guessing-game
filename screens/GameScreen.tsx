import { View, Button } from 'react-native'
import { globalStyles } from '@/styles/globalStyles'
import { useNumber } from '@/context/NumberContext'
import { GameScreenProps } from '@/types/screens'
import Title from '@/components/Title'

export default function StartGameScreen({ navigation }: GameScreenProps) {
  const { number } = useNumber()

  return (
    <View style={globalStyles.screenContainer}>
      <Title>Is your number lower or higher than {number}?</Title>
      <Button
        title='Finish Game'
        onPress={() => navigation.navigate('GameOver')}
      />
    </View>
  )
}
