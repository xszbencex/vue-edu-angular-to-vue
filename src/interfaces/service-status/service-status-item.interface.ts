export type HealthStatus = 'UP' | 'DOWN';

export interface ServiceStatusItem {
  readonly updatedAt: string;
  readonly healthStatus: HealthStatus;
}
