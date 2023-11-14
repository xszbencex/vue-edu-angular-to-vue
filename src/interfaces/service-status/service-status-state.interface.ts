import type { ServiceStatusItem } from '@/interfaces/service-status/service-status-item.interface'
import type { ServiceStatusType } from '@/types/service-status/service-status-item.type'

export interface ServiceStatusEmptyState {}

export interface ServiceStatusLoadingState {
  readonly isLoading: boolean
}

export interface ServiceStatusFetchedState {
  readonly services: Record<ServiceStatusType, ServiceStatusItem>
}

export type ServiceStatusState =
  | ServiceStatusEmptyState
  | ServiceStatusLoadingState
  | ServiceStatusFetchedState
