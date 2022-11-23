import React, { useState, useContext, useEffect } from 'react'

const AppContext = React.createContext()

const AppProvider = ({ children }) => {

    

    return <AppContext.Provider value={{
        
        
    }}>{children}</AppContext.Provider>
}


export const useGlobalContext = () => {
    return useContext(AppContext)
  }
  
  export { AppContext, AppProvider }