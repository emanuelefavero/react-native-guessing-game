import type { NativeStackScreenProps } from '@react-navigation/native-stack'

export type RootStackParamList = {
  StartGame: undefined
  Game: undefined
  GameOver: undefined
}

export type StartGameScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'StartGame'
>

export type GameScreenProps = NativeStackScreenProps<RootStackParamList, 'Game'>

export type GameOverScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'GameOver'
>
