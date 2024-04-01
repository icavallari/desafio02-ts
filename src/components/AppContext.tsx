import { createContext, useEffect, useState } from "react"
import { getAllLocalStorage } from "../services/storage"

interface IAppContext{
    user: string,
    isLoggedIn: boolean,
    setIsLoggedIn: (isLoggedIn: boolean) => void
}
  
export const AppContext = createContext({} as IAppContext)
  
export const AppContextProvider = ({ children }: any) => {

    const [ isLoggedIn, setIsLoggedIn ] = useState<boolean>(false)
    const user = 'rodrigo'

    useEffect(() => {

        const storage = getAllLocalStorage()
        if(storage){
            setIsLoggedIn(true)
        } 

    }, [])

    return (
        <AppContext.Provider value={{user, isLoggedIn, setIsLoggedIn}}>
            {children}
        </AppContext.Provider>
    )

}