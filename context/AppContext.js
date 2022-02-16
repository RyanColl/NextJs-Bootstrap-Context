import React, { createContext, useState } from 'react'

// provider created
export const AppProvider = createContext()
// provider component created
function AppContext({children}) {
    const initialState = {
        data: []
    }
    const [state, dispatch] = useState(initialState)
    return (
        <AppProvider.Provider value={{state, dispatch}}>
            {children}
        </AppProvider.Provider>
    )
}

export default AppContext