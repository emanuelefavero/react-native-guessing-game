import { useState } from 'react'
import { View, TextInput, StyleSheet } from 'react-native'
import { globalStyles } from '@/styles/globalStyles'
import { StartGameScreenProps } from '@/types/screens'
import PrimaryButton from '@/components/PrimaryButton'
import Title from '@/components/Title'

export default function StartGameScreen({ navigation }: StartGameScreenProps) {
  const [inputNumber, setInputNumber] = useState('')

  return (
    <View style={globalStyles.screenContainer}>
      <Title />
      <TextInput
        value={inputNumber}
        onChangeText={(text) => setInputNumber(text.replace(/[^0-9]/g, ''))}
        style={styles.input}
        keyboardType='numeric'
        keyboardAppearance='dark'
        placeholder='Type a number'
        placeholderTextColor='#FDA4AF'
      />

      <View style={styles.buttonsContainer}>
        <PrimaryButton onPress={() => setInputNumber('')}>Reset</PrimaryButton>
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
    maxWidth: 215,
  },

  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    maxWidth: 285,
  },
})
