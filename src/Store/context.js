import React from 'react'
import { streakStore } from './streakStore'

export const storesContext = React.createContext({
  streakStore: new streakStore(),
})