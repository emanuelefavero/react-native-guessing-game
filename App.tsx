import useLoadFonts from '@/hooks/useLoadFonts'
import { NumberProvider } from '@/context/NumberContext'
import { GameStateProvider } from '@/context/GameStateContext'
import Layout from '@/Layout'

export default function App() {
  const { loaded, error } = useLoadFonts()
  if (!loaded || error) return null // show nothing while loading fonts

  return (
    <GameStateProvider>
      <NumberProvider>
        <Layout />
      </NumberProvider>
    </GameStateProvider>
  )
}
