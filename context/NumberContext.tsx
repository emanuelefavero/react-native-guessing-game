import React, {
  createContext,
  useContext,
  useReducer,
  ReactNode,
  Dispatch,
} from 'react'

type NumberState = {
  number: number
}

type NumberAction = {
  type: 'setNumber'
  payload: number
}

type NumberContextType = {
  state: NumberState
  action: Dispatch<NumberAction>
}

function numberReducer(state: NumberState, action: NumberAction): NumberState {
  switch (action.type) {
    case 'setNumber':
      return { number: action.payload }
    default:
      return state
  }
}

const initialState: NumberState = {
  number: 0,
}

const NumberContext = createContext<NumberContextType | undefined>(undefined) // !
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
  return context.state // !
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
// const { number } = useNumber()
// const dispatch = useNumberDispatch()
// dispatch({ type: 'setNumber', payload: 10 })
