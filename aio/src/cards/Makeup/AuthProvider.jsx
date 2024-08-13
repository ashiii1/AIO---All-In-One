import React from 'react'
import { createContext } from 'react'
import { useState } from 'react'

export const AuthContext = createContext()

const AuthProvider = ({ children }) => {
  const localStorageToken = JSON.parse(localStorage.getItem("login"));
  const [token, setToken] = useState(localStorageToken?.token);
  const localStorageUser = JSON.parse(localStorage.getItem("user"));
  const [user, setUser] = useState(localStorageUser?.user);
  console.log(token)
  console.log(user)

  return (
    <AuthContext.Provider value={{ token, setToken, user, setUser }} >
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider;