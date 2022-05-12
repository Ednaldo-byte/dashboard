import { createContext, Dispatch, SetStateAction, useEffect, useState } from "react";
import {recoverUserInformation, signInRequest} from '../services/auth'
import Router from 'next/router'
import {setCookie, parseCookies} from 'nookies'

interface context {
  isActive: boolean,
  setIsActive: Dispatch<SetStateAction<boolean>>,
  isAutenticaded: boolean,
  signIn: (data: SignInData) => Promise<void>,
  user: User | null
}

export type SignInData = {
  user: string,
  userName: string,
  password: string
}

type User = {
  name: string,
  userName: string
}

export const AuthContext = createContext({} as context)

export default function AuthProvider({children}: any){

  const [user, setUser] = useState<User | null>(null)
  const [ isActive, setIsActive ] = useState(false)
  const isAutenticaded = !!user

  useEffect(() => {
    const {'nextauth.token': token} = parseCookies()

    if (token){
      recoverUserInformation().then(res => setUser(res.user))
    }
  }, [])

  async function signIn({password, userName}: SignInData){

    const {token, user } = await signInRequest({
      userName, password
    })

    setCookie(undefined, 'nextauth.token', token, {
      maxAge: 60 * 60 * 1 //1 hour 
    })

    setUser(user)
    console.log(user)

    Router.push('/')
  }

  return(
    <AuthContext.Provider value={{isActive, setIsActive, isAutenticaded, signIn, user}}>
      {children}
    </AuthContext.Provider>
  )
}