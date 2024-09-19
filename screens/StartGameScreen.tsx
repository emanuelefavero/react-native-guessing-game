import { View, Button, TextInput, StyleSheet } from 'react-native'
import { globalStyles } from '@/styles/globalStyles'
import { StartGameScreenProps } from '@/types/screens'
import PrimaryButton from '@/components/PrimaryButton'
import Title from '@/components/Title'

export default function StartGameScreen({ navigation }: StartGameScreenProps) {
  return (
    <View style={globalStyles.screenContainer}>
      <Title />
      <TextInput
        style={styles.input}
        placeholder='Type a number'
        placeholderTextColor='#FDA4AF'
      />

      {/* <Button
          title='Start Game'
          onPress={() => navigation.navigate('Game')}
        /> */}

      <PrimaryButton>Reset</PrimaryButton>
      <PrimaryButton>Confirm</PrimaryButton>
    </View>
  )
}

const styles = StyleSheet.create({
  input: {
    paddingVertical: 6,
    fontSize: 30,
    borderBottomColor: '#FFE4E6',
    color: '#FFE4E6',
    borderBottomWidth: 1.2,
    marginBottom: 20,
    maxWidth: 200,
  },
})

/*
// TIP: How to add shadow to a component
shadowColor: '#4c0519',
shadowOffset: { width: 4, height: 4 },
shadowOpacity: 1,
shadowRadius: 0.5,
*/
