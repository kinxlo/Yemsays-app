import { useLocation, Navigate, Outlet } from 'react-router-dom'
import useAuth from './useAuth'

const RequireAuth = () => {
  const location = useLocation()
  const { token } = useAuth()

  const content = token ? (
    <Outlet />
  ) : (
    <Navigate to='/admin/signin' state={{ from: location }} replace />
  )

  return content
}
export default RequireAuth
