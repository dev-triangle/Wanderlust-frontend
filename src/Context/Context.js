import React, {  useContext} from 'react'

const AppContext = React.createContext()

const AppProvider = ({ children }) => {

    // const [authenticated,setAuthenticated] = useState(false)
    const[actualname,setActualname]=useState('')
    const[phno,setPhno]=useState('')
    const[userimg,setUserimg]=useState()
    return <AppContext.Provider value={{
        actualname,setActualname,phno,setPhno,userimg,setUserimg
        
    }}>{children}</AppContext.Provider>
}


export const useGlobalContext = () => {
    return useContext(AppContext)
  }
  
  export { AppContext, AppProvider }