import { useSelector } from 'react-redux'
import jwtDecode from 'jwt-decode'
import { selectCurrentToken } from '../pages/admin/auth/api/authSlice'

const useAuth = () => {
  const token = useSelector(selectCurrentToken)
  let isAdmin = false
  let status = 'USER'

  if (token) {
    const decoded = jwtDecode(token)
    console.log(decoded)
    const { role } = decoded.userInfo

    isAdmin = role.includes('ADMIN')
    if (isAdmin) status = 'ADMIN'

    return { role, status, isAdmin }
  }
  return { role: `USER`, status, isAdmin }
}
export default useAuth
