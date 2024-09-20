// GameStateContext.tsx
import React, {
  createContext,
  useContext,
  useReducer,
  ReactNode,
  Dispatch,
} from 'react'

type GameState = 'start' | 'playing' | 'over'

type GameStateAction = {
  type: 'setGameState'
  payload: GameState
}

type GameStateContextType = {
  state: GameState
  action: Dispatch<GameStateAction>
}

function gameStateReducer(
  state: GameState,
  action: GameStateAction
): GameState {
  switch (action.type) {
    case 'setGameState':
      return action.payload
    default:
      return state
  }
}

const initialState: GameState = 'start'

const GameStateContext = createContext<GameStateContextType | undefined>(
  undefined
)
const GameStateDispatchContext = createContext<
  Dispatch<GameStateAction> | undefined
>(undefined)

export function GameStateProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(gameStateReducer, initialState)

  return (
    <GameStateContext.Provider value={{ state, action: dispatch }}>
      <GameStateDispatchContext.Provider value={dispatch}>
        {children}
      </GameStateDispatchContext.Provider>
    </GameStateContext.Provider>
  )
}

export function useGameState() {
  const context = useContext(GameStateContext)
  if (context === undefined) {
    throw new Error('useGameState must be used within a GameStateProvider')
  }
  return context.state
}

export function useGameDispatch() {
  const context = useContext(GameStateDispatchContext)
  if (context === undefined) {
    throw new Error('useGameDispatch must be used within a GameStateProvider')
  }
  return context
}
