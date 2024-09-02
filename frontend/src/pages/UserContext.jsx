import { createContext, useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { jwtDecode } from 'jwt-decode'

export const UserContext = createContext()

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState({})
  useEffect(() => {
    const token = localStorage.getItem("token")
    if (token) {
      const user = jwtDecode(token)
      setUser(user)
    }
  }, [])

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  )
}

UserProvider.propTypes = {
  children: PropTypes.node
}