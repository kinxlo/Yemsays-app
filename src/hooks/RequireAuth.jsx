import { useLocation, Navigate, Outlet } from 'react-router-dom'
import useAuth from './useAuth'

const RequireAuth = ({ allowedRoles }) => {
  const location = useLocation()
  const { role } = useAuth()

  const content = allowedRoles.includes(role) ? (
    <Outlet />
  ) : (
    <Navigate to='/admin/signin' state={{ from: location }} replace />
  )

  return content
}
export default RequireAuth
