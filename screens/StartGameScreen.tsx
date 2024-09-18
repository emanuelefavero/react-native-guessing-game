import { View, Button, TextInput, StyleSheet } from 'react-native'
import { globalStyles } from '@/styles/globalStyles'
import { StartGameScreenProps } from '@/types/screens'
import PrimaryButton from '@/components/PrimaryButton'

export default function StartGameScreen({ navigation }: StartGameScreenProps) {
  return (
    <View style={globalStyles.screenContainer}>
      <View style={styles.inputContainer}>
        <TextInput />
        <PrimaryButton>Reset</PrimaryButton>
        <PrimaryButton>Confirm</PrimaryButton>
        {/* <Button title='Start Game' onPress={() => navigation.navigate('Game')} /> */}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  inputContainer: {
    padding: 16,
    backgroundColor: '#9f1239',
    borderRadius: 10,
    width: '100%',
    maxWidth: 360,
    shadowColor: '#4c0519',
    shadowOffset: { width: 4, height: 4 },
    shadowOpacity: 1,
    shadowRadius: 0.5,
  },
})
