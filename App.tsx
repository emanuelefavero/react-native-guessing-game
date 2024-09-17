import { StatusBar } from 'expo-status-bar'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import StartGameScreen from '@/screens/StartGameScreen'
import GameScreen from '@/screens/GameScreen'
import GameOverScreen from '@/screens/GameOverScreen'
import { RootStackParams } from '@/types/screens'

const Stack = createNativeStackNavigator<RootStackParams>()

const screenOptions = {
  headerShown: false,
}

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style='auto' />
      <Stack.Navigator>
        <Stack.Screen
          name='StartGame'
          component={StartGameScreen}
          options={{ ...screenOptions, title: 'Start Game' }}
        />
        <Stack.Screen
          name='Game'
          component={GameScreen}
          options={{ ...screenOptions, title: 'Game' }}
        />
        <Stack.Screen
          name='GameOver'
          component={GameOverScreen}
          options={{ ...screenOptions, title: 'Game Over' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
