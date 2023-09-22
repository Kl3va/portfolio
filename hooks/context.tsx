import React, { createContext, useContext, useState } from 'react'

export interface CardState {
  isMenuOpen: boolean
  handleMenuOpen: () => void
  handleMenuClose: () => void
}

const CardStateContext = createContext<CardState | undefined>(undefined)

export const useCardStateContext = (): CardState => {
  const context = useContext(CardStateContext)
  if (context === undefined) {
    throw new Error(
      'useCardStateContext must be used within a CardStateProvider'
    )
  }
  return context
}

interface CardStateProviderProps {
  children: React.ReactNode
}

export const CardStateProvider: React.FC<CardStateProviderProps> = ({
  children,
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const handleMenuOpen = (): void => {
    setIsMenuOpen(true)
  }

  const handleMenuClose = (): void => {
    setIsMenuOpen(false)
  }

  return (
    <CardStateContext.Provider
      value={{ isMenuOpen, handleMenuOpen, handleMenuClose }}
    >
      {children}
    </CardStateContext.Provider>
  )
}
