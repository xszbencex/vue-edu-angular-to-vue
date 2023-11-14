import { API_URL } from '@/constants/api'
import type { FetchServiceStatusResponse } from '@/interfaces/service-status/fetch-service-status-response.interface'
import type { Observable } from 'rxjs'
import { fromPromise } from 'rxjs/internal/observable/innerFrom'

export function fetchServiceStatus$(): Observable<FetchServiceStatusResponse> {
  return fromPromise(fetch(API_URL).then((res) => res.json()))
}
