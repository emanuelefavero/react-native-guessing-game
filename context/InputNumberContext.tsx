import React, {
  createContext,
  useContext,
  useReducer,
  ReactNode,
  Dispatch,
} from 'react'

type inputNumberState = {
  inputNumber: string
}

type inputNumberAction = {
  type: 'setInputNumber'
  payload: string
}

type InputNumberContextType = {
  state: inputNumberState
  action: Dispatch<inputNumberAction>
}

function inputNumberReducer(
  state: inputNumberState,
  action: inputNumberAction
): inputNumberState {
  switch (action.type) {
    case 'setInputNumber':
      return { inputNumber: action.payload }
    default:
      return state
  }
}

const initialState: inputNumberState = {
  inputNumber: '',
}

const InputNumberContext = createContext<InputNumberContextType | undefined>(
  undefined
)

const InputNumberDispatchContext = createContext<
  Dispatch<inputNumberAction> | undefined
>(undefined)

export function InputNumberProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(inputNumberReducer, initialState)

  return (
    <InputNumberContext.Provider value={{ state, action: dispatch }}>
      <InputNumberDispatchContext.Provider value={dispatch}>
        {children}
      </InputNumberDispatchContext.Provider>
    </InputNumberContext.Provider>
  )
}

export function useInputNumber() {
  const context = useContext(InputNumberContext)
  if (context === undefined) {
    throw new Error('useInputNumber must be used within a InputNumberProvider')
  }
  return context.state
}

export function useInputNumberDispatch() {
  const context = useContext(InputNumberDispatchContext)
  if (context === undefined) {
    throw new Error(
      'useInputNumberDispatch must be used within a InputNumberProvider'
    )
  }
  return context
}
