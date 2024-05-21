import React, { createContext } from 'react'

export default function MainContext({children}) {
    let MainContext = createContext()

  return (
    <>
    <MainContext.Provider>
        {children}
    </MainContext.Provider>
    
    </>
  )
}
