import { fetchServiceStatus$ } from '@/api/service-status.api'
import { SERVICE_STATUS_STORE_FEATURE_NAME } from '@/constants/service-status/service-status-store.constants'
import type { ServiceStatusState } from '@/interfaces/service-status/service-status-state.interface'
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useServiceStatusStore = defineStore(SERVICE_STATUS_STORE_FEATURE_NAME, () => {
  const serviceStatusState = ref<ServiceStatusState>({})

  function fetchServiceStatus() {
    serviceStatusState.value = { isLoading: true }
    setTimeout(() => {
      fetchServiceStatus$().subscribe({
        next: (response) => (serviceStatusState.value = { services: response }),
        error: () => (serviceStatusState.value = {})
      })
    }, 1000)
  }

  return { serviceStatusState, fetchServiceStatus }
})
