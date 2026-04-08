import { useEffect, useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { api } from '../services/api.js'
import { Spinner, Alert, Button, PageHeader } from '../components/UI.jsx'
import styles from './NewAppointmentPage.module.css'

export default function NewAppointmentPage() {
  const navigate = useNavigate()
  const location = useLocation()
  const preselected = location.state?.serviceId

  const [services, setServices] = useState([])
  const [loadingSvc, setLoadingSvc] = useState(true)
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState(null)
  const [success, setSuccess] = useState(false)

  const [form, setForm] = useState({
    clientName: '',
    clientEmail: '',
    appointmentDate: '',
    appointmentTime: '',
    serviceId: preselected ? String(preselected) : '',
  })

  useEffect(() => {
    api.getServices()
      .then(setServices)
      .catch(e => setError(e.message))
      .finally(() => setLoadingSvc(false))
  }, [])

  const set = (field) => (e) => setForm(f => ({ ...f, [field]: e.target.value }))

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError(null)
    setSubmitting(true)
    try {
      await api.createAppointment({
        clientName: form.clientName,
        clientEmail: form.clientEmail,
        appointmentDate: form.appointmentDate,
        appointmentTime: form.appointmentTime + ':00',
        serviceId: Number(form.serviceId),
      })
      setSuccess(true)
      setTimeout(() => navigate('/appointments'), 1500)
    } catch (err) {
      setError(err.message)
    } finally {
      setSubmitting(false)
    }
  }

  const today = new Date().toISOString().split('T')[0]

  return (
    <div className="animate-in">
      <PageHeader
        title="Nueva cita"
        subtitle="Completa los datos para registrar tu reserva"
      />

      {error && <Alert type="error">{error}</Alert>}
      {success && <Alert type="success">¡Cita registrada! Redirigiendo…</Alert>}

      <div className={styles.formWrap}>
        {loadingSvc ? <Spinner /> : (
          <form onSubmit={handleSubmit} className={styles.form}>
            <div className={styles.row}>
              <div className={styles.field}>
                <label className={styles.label}>Nombre completo</label>
                <input
                  className={styles.input}
                  type="text"
                  placeholder="María García"
                  value={form.clientName}
                  onChange={set('clientName')}
                  required
                />
              </div>
              <div className={styles.field}>
                <label className={styles.label}>Correo electrónico</label>
                <input
                  className={styles.input}
                  type="email"
                  placeholder="maria@ejemplo.com"
                  value={form.clientEmail}
                  onChange={set('clientEmail')}
                  required
                />
              </div>
            </div>

            <div className={styles.row}>
              <div className={styles.field}>
                <label className={styles.label}>Fecha</label>
                <input
                  className={styles.input}
                  type="date"
                  min={today}
                  value={form.appointmentDate}
                  onChange={set('appointmentDate')}
                  required
                />
              </div>
              <div className={styles.field}>
                <label className={styles.label}>Hora</label>
                <input
                  className={styles.input}
                  type="time"
                  value={form.appointmentTime}
                  onChange={set('appointmentTime')}
                  required
                />
              </div>
            </div>

            <div className={styles.field}>
              <label className={styles.label}>Servicio</label>
              <select
                className={styles.input}
                value={form.serviceId}
                onChange={set('serviceId')}
                required
              >
                <option value="">— Selecciona un servicio —</option>
                {services.map(s => (
                  <option key={s.id} value={s.id}>
                    {s.name} ({s.duration} min)
                  </option>
                ))}
              </select>
            </div>

            <div className={styles.actions}>
              <Button type="button" variant="ghost" onClick={() => navigate(-1)}>
                Cancelar
              </Button>
              <Button type="submit" loading={submitting} disabled={success}>
                Registrar cita
              </Button>
            </div>
          </form>
        )}
      </div>
    </div>
  )
}
