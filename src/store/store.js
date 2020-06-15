import React from 'react'
import { gameStore } from './gameStore'
import { uiStore } from './uiStore'
import { useLocalStore } from 'mobx-react-lite'

const storeContext = React.createContext({
  game: undefined,
  ui: undefined
})

export const StoreProvider = ({ children }) => {
  const game = useLocalStore(gameStore)
  const ui = useLocalStore(uiStore)
  return <storeContext.Provider value={{game, ui}}>{children}</storeContext.Provider>
}

export const useStore = () => {
  return React.useContext(storeContext)
}