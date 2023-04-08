import { useSelector } from 'react-redux'
// import jwtDecode from 'jwt-decode'
import { selectCurrentToken } from '../pages/admin/auth/api/authSlice'

const useAuth = () => {
  const token = useSelector(selectCurrentToken)
  const authToken = token ? { token } : {}
  return authToken
}
export default useAuth
