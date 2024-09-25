import React, {
  createContext,
  useContext,
  useReducer,
  ReactNode,
  Dispatch,
} from 'react'

type NumberState = {
  target: number
  min: number
  max: number
  guess: number
  previousGuesses: number[]
  found: boolean
}

type NumberAction =
  | { type: 'set_target'; payload: number }
  | { type: 'lower' }
  | { type: 'higher' }
  | { type: 'reset' }

type NumberContextType = {
  state: NumberState
  action: Dispatch<NumberAction>
}

const initialState: NumberState = {
  target: 0,
  min: 1,
  max: 100,
  guess: 50,
  previousGuesses: [50],
  found: false,
}

function numberReducer(state: NumberState, action: NumberAction): NumberState {
  switch (action.type) {
    case 'set_target':
      return {
        ...state,
        target: action.payload,
        min: 1,
        max: 100,
        guess: Math.floor((1 + 100) / 2),
        previousGuesses: [Math.floor((1 + 100) / 2)],
        found: false,
      }

    case 'lower':
      const newMax = state.guess - 1
      const newGuess = Math.floor((state.min + newMax) / 2)
      const found = newGuess === state.target

      return {
        ...state,
        max: newMax,
        guess: newGuess,
        previousGuesses: [...state.previousGuesses, newGuess],
        found,
      }

    case 'higher':
      const newMin = state.guess + 1
      const newGuess2 = Math.floor((newMin + state.max) / 2)
      const found2 = newGuess2 === state.target

      return {
        ...state,
        min: newMin,
        guess: newGuess2,
        previousGuesses: [...state.previousGuesses, newGuess2],
        found: found2,
      }

    case 'reset':
      return {
        ...initialState,
      }
    default:
      return state
  }
}

const NumberContext = createContext<NumberContextType | undefined>(undefined)
const NumberDispatchContext = createContext<Dispatch<NumberAction> | undefined>(
  undefined
)

export function NumberProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(numberReducer, initialState)

  return (
    <NumberContext.Provider value={{ state, action: dispatch }}>
      <NumberDispatchContext.Provider value={dispatch}>
        {children}
      </NumberDispatchContext.Provider>
    </NumberContext.Provider>
  )
}

export function useNumber() {
  const context = useContext(NumberContext)
  if (context === undefined) {
    throw new Error('useNumber must be used within a NumberProvider')
  }
  return context.state
}

export function useNumberDispatch() {
  const context = useContext(NumberDispatchContext)
  if (context === undefined) {
    throw new Error('useNumberDispatch must be used within a NumberProvider')
  }
  return context
}

// Usage example:
// import { useNumber, useNumberDispatch } from '@/context/NumberContext'
// const { target } = useNumber()
// const dispatch = useNumberDispatch()
// dispatch({ type: 'set', payload: 10 })
