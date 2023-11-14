import type { ServiceStatusItem } from '@/interfaces/service-status/service-status-item.interface'
import type { ServiceStatusType } from '@/types/service-status/service-status-item.type'

export interface FetchServiceStatusResponse {
  readonly services: Record<ServiceStatusType, ServiceStatusItem>
}
