import { createContext, Dispatch, SetStateAction, useState } from "react";

interface context {
  isActive: boolean,
  setIsActive: Dispatch<SetStateAction<boolean>>
}
export const AuthContext = createContext({} as context)

export default function AuthProvider({children}: any){

  const [ isActive, setIsActive ] = useState(false)

  return(
    <AuthContext.Provider value={{isActive, setIsActive}}>
      {children}
    </AuthContext.Provider>
  )
}