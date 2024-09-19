import { View, TextInput, StyleSheet } from 'react-native'
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

      <View style={styles.buttonsContainer}>
        <PrimaryButton>Reset</PrimaryButton>
        <PrimaryButton onPress={() => navigation.navigate('Game')}>
          Confirm
        </PrimaryButton>
      </View>
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
    marginBottom: 30,
    maxWidth: 200,
  },

  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    maxWidth: 280,
  },
})
