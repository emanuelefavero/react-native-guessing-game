import type { NativeStackScreenProps } from '@react-navigation/native-stack'

export type RootStackParams = {
  StartGame: undefined
  Game: undefined
  GameOver: undefined
}

export type StartGameScreenProps = NativeStackScreenProps<
  RootStackParams,
  'StartGame'
>

export type GameScreenProps = NativeStackScreenProps<RootStackParams, 'Game'>

export type GameOverScreenProps = NativeStackScreenProps<
  RootStackParams,
  'GameOver'
>
