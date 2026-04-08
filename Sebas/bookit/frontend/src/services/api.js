const BASE_URL = import.meta.env.VITE_API_URL || '/api'

async function request(path, options = {}) {
  const url = `${BASE_URL}${path}`
  const res = await fetch(url, {
    headers: { 'Content-Type': 'application/json', ...options.headers },
    ...options,
  })
  if (!res.ok) {
    const err = await res.json().catch(() => ({ error: 'Error desconocido' }))
    throw new Error(err.error || `HTTP ${res.status}`)
  }
  if (res.status === 204) return null
  return res.json()
}

export const api = {
  // Services
  getServices: () => request('/services'),

  // Appointments
  getAppointments: (status) =>
    request('/appointments' + (status ? `?status=${status}` : '')),

  createAppointment: (data) =>
    request('/appointments', { method: 'POST', body: JSON.stringify(data) }),

  updateStatus: (id, status) =>
    request(`/appointments/${id}/status`, {
      method: 'PATCH',
      body: JSON.stringify({ status }),
    }),

  deleteAppointment: (id) =>
    request(`/appointments/${id}`, { method: 'DELETE' }),
}
