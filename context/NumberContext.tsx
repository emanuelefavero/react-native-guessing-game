import React, {
  createContext,
  useContext,
  useReducer,
  ReactNode,
  Dispatch,
} from 'react'

type PreviousGuess = {
  id: string
  value: number
  sign: string
}

type NumberState = {
  target: number
  min: number
  max: number
  guess: number
  previousGuesses: PreviousGuess[]
  found: boolean
}

type NumberAction =
  | { type: 'set_target'; payload: number }
  | { type: 'lower' }
  | { type: 'higher' }
  | { type: 'reset' }

type NumberContextType = {
  state: NumberState
  dispatch: Dispatch<NumberAction>
}

const initialState: NumberState = {
  target: 0,
  min: 1,
  max: 100,
  guess: 50,
  previousGuesses: [],
  found: false,
}

function getPreviousGuessSign(guess: number, target: number) {
  return guess === target ? '' : guess < target ? '-' : '+'
}

function numberReducer(state: NumberState, action: NumberAction): NumberState {
  switch (action.type) {
    case 'set_target':
      const firstGuess = Math.floor((1 + 100) / 2)
      const found = firstGuess === action.payload

      return {
        ...state,
        target: action.payload,
        min: 1,
        max: 100,
        guess: firstGuess,
        previousGuesses: [],
        found,
      }

    case 'lower':
      const newMax = state.guess - 1
      const newGuess = Math.floor((state.min + newMax) / 2)
      const found2 = newGuess === state.target

      return {
        ...state,
        max: newMax,
        guess: newGuess,
        previousGuesses: [
          ...state.previousGuesses,
          {
            id: state.previousGuesses.length + 1 + '',
            value: state.guess,
            sign: getPreviousGuessSign(state.guess, state.target),
          },
        ],
        found: found2,
      }

    case 'higher':
      const newMin = state.guess + 1
      const newGuess2 = Math.floor((newMin + state.max) / 2)
      const found3 = newGuess2 === state.target

      return {
        ...state,
        min: newMin,
        guess: newGuess2,
        previousGuesses: [
          ...state.previousGuesses,
          {
            id: state.previousGuesses.length + 1 + '',
            value: state.guess,
            sign: getPreviousGuessSign(state.guess, state.target),
          },
        ],
        found: found3,
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

export function NumberProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(numberReducer, initialState)

  return (
    <NumberContext.Provider value={{ state, dispatch }}>
      {children}
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
  const context = useContext(NumberContext)
  if (context === undefined) {
    throw new Error('useNumberDispatch must be used within a NumberProvider')
  }
  return context.dispatch
}

// Usage example:

// import { useNumber, useNumberDispatch } from '@/context/NumberContext'
// const { target } = useNumber()
// const dispatch = useNumberDispatch()
// dispatch({ type: 'set_target', payload: 50 })
