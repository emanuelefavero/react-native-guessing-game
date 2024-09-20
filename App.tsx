import { useState } from 'react'
import { StatusBar } from 'expo-status-bar'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import useLoadFonts from '@/hooks/useLoadFonts'
import { NumberProvider } from '@/context/NumberContext'
import { GameStateProvider } from '@/context/GameStateContext'
import StartGameScreen from '@/screens/StartGameScreen'
import GameScreen from '@/screens/GameScreen'
import GameOverScreen from '@/screens/GameOverScreen'
import { RootStackParams } from '@/types/screens'

const Stack = createNativeStackNavigator<RootStackParams>()

const screenOptions = {
  headerShown: false,
}

export default function App() {
  const [gameState, setGameState] = useState('start')

  const { loaded, error } = useLoadFonts()
  if (!loaded || error) return null // show nothing while loading fonts

  return (
    <GameStateProvider>
      <NumberProvider>
        <NavigationContainer>
          <StatusBar style='auto' translucent />
          <Stack.Navigator>
            {gameState === 'start' && (
              <Stack.Screen
                name='StartGame'
                component={StartGameScreen}
                options={{ ...screenOptions, title: 'Start Game' }}
              />
            )}

            {gameState === 'playing' && (
              <Stack.Screen
                name='Game'
                component={GameScreen}
                options={{ ...screenOptions, title: 'Game' }}
              />
            )}

            {gameState === 'over' && (
              <Stack.Screen
                name='GameOver'
                component={GameOverScreen}
                options={{ ...screenOptions, title: 'Game Over' }}
              />
            )}
          </Stack.Navigator>
        </NavigationContainer>
      </NumberProvider>
    </GameStateProvider>
  )
}
