import React, { createContext, useReducer } from 'react'

import { reducer, initialState } from './TableReducer'

export const TableContext = createContext()

export const TableProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <TableContext.Provider value={[state, dispatch]}>
      {children}
    </TableContext.Provider>
  )
}