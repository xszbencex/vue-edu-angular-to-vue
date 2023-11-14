import type {
  ServiceStatusFetchedState,
  ServiceStatusState
} from '@/interfaces/service-status/service-status-state.interface'

export const isResultState = (state: ServiceStatusState): state is ServiceStatusFetchedState =>
  'services' in state
