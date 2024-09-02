import { Navigate } from "react-router-dom"
import PropTypes from 'prop-types'
import { jwtDecode } from 'jwt-decode'

export const PrivateRoute = ({ children }) => {
  try {
    const token = localStorage.getItem("token")
    if (!token) {
      return <Navigate to="/login" />
    }
    const user = jwtDecode(token)
    // console.log(user.rest)

    if (!user) {
      return <Navigate to="/login" />
    }
    return ( children )
    
  } catch (error) {
    console.log(error)
  }
}

PrivateRoute.propTypes = {
  children: PropTypes.node
}