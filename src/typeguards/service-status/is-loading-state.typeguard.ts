import type {
  ServiceStatusLoadingState,
  ServiceStatusState
} from '@/interfaces/service-status/service-status-state.interface'

export const isLoadingState = (state: ServiceStatusState): state is ServiceStatusLoadingState =>
  'isLoading' in state
