import { STATUS_ROUTE_NAME } from '@/constants/routes'
import { isAuthenticated } from '@/services/authentication.service'

export function redirectToStatusGuard() {
  if (isAuthenticated()) {
    return { name: STATUS_ROUTE_NAME }
  } else {
    return true
  }
}
