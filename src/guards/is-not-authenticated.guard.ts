import { LOGIN_ROUTE_NAME } from '@/constants/routes'
import { isAuthenticated } from '@/services/authentication.service'

export function isNotAuthenticatedGuard() {
  if (!isAuthenticated()) {
    return { name: LOGIN_ROUTE_NAME }
  } else {
    return true
  }
}
