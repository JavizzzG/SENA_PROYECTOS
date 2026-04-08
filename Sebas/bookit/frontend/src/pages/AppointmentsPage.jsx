import { useEffect, useState, useCallback } from 'react'
import { useNavigate } from 'react-router-dom'
import { api } from '../services/api.js'
import { Spinner, Alert, Badge, Button, PageHeader } from '../components/UI.jsx'
import styles from './AppointmentsPage.module.css'

const FILTERS = [
  { label: 'Todas', value: '' },
  { label: 'Pendientes', value: 'PENDING' },
  { label: 'Atendidas', value: 'DONE' },
  { label: 'Canceladas', value: 'CANCELLED' },
]

export default function AppointmentsPage() {
  const navigate = useNavigate()
  const [appointments, setAppointments] = useState([])
  const [filter, setFilter] = useState('')
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [actionError, setActionError] = useState(null)
  const [acting, setActing] = useState(null) // id of the appointment being acted on

  const load = useCallback(() => {
    setLoading(true)
    setError(null)
    api.getAppointments(filter)
      .then(setAppointments)
      .catch(e => setError(e.message))
      .finally(() => setLoading(false))
  }, [filter])

  useEffect(() => { load() }, [load])

  const handleStatus = async (id, status) => {
    setActing(id)
    setActionError(null)
    try {
      const updated = await api.updateStatus(id, status)
      setAppointments(prev => prev.map(a => a.id === id ? updated : a))
    } catch (e) {
      setActionError(e.message)
    } finally {
      setActing(null)
    }
  }

  const handleDelete = async (id) => {
    if (!confirm('¿Eliminar esta cita?')) return
    setActing(id)
    setActionError(null)
    try {
      await api.deleteAppointment(id)
      setAppointments(prev => prev.filter(a => a.id !== id))
    } catch (e) {
      setActionError(e.message)
    } finally {
      setActing(null)
    }
  }

  return (
    <div className="animate-in">
      <PageHeader
        title="Citas registradas"
        subtitle={`${appointments.length} cita${appointments.length !== 1 ? 's' : ''} encontrada${appointments.length !== 1 ? 's' : ''}`}
        action={
          <Button onClick={() => navigate('/appointments/new')}>+ Nueva cita</Button>
        }
      />

      {/* Filter tabs */}
      <div className={styles.filters}>
        {FILTERS.map(f => (
          <button
            key={f.value}
            className={`${styles.filterBtn} ${filter === f.value ? styles.filterActive : ''}`}
            onClick={() => setFilter(f.value)}
          >
            {f.label}
          </button>
        ))}
      </div>

      {actionError && <Alert type="error">{actionError}</Alert>}
      {loading && <Spinner />}
      {error && <Alert type="error">{error}</Alert>}

      {!loading && !error && appointments.length === 0 && (
        <div className={styles.empty}>
          <span className={styles.emptyIcon}>📭</span>
          <p>No hay citas {filter ? 'con este estado' : 'registradas'}</p>
          <Button size="sm" onClick={() => navigate('/appointments/new')}>
            Registrar primera cita
          </Button>
        </div>
      )}

      {!loading && !error && appointments.length > 0 && (
        <div className={styles.list}>
          {appointments.map(a => (
            <div key={a.id} className={styles.card}>
              <div className={styles.cardLeft}>
                <div className={styles.clientInfo}>
                  <span className={styles.clientName}>{a.clientName}</span>
                  <span className={styles.clientEmail}>{a.clientEmail}</span>
                </div>
                <div className={styles.meta}>
                  <span className={styles.metaItem}>
                    📅 {formatDate(a.appointmentDate)} — {formatTime(a.appointmentTime)}
                  </span>
                  <span className={styles.metaItem}>
                    🏷 {a.service.name}
                    <span className={styles.duration}>{a.service.duration} min</span>
                  </span>
                </div>
              </div>

              <div className={styles.cardRight}>
                <Badge status={a.status} />
                <div className={styles.actions}>
                  {a.status === 'PENDING' && (
                    <>
                      <Button
                        variant="success"
                        size="sm"
                        loading={acting === a.id}
                        onClick={() => handleStatus(a.id, 'DONE')}
                      >
                        ✓ Atendida
                      </Button>
                      <Button
                        variant="danger"
                        size="sm"
                        loading={acting === a.id}
                        onClick={() => handleStatus(a.id, 'CANCELLED')}
                      >
                        ✕ Cancelar
                      </Button>
                    </>
                  )}
                  <Button
                    variant="ghost"
                    size="sm"
                    loading={acting === a.id}
                    onClick={() => handleDelete(a.id)}
                  >
                    🗑
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

function formatDate(dateStr) {
  if (!dateStr) return ''
  const [y, m, d] = dateStr.split('-')
  return `${d}/${m}/${y}`
}

function formatTime(timeStr) {
  if (!timeStr) return ''
  return timeStr.slice(0, 5)
}
