import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { api } from '../services/api.js'
import { Spinner, Alert, Button, PageHeader } from '../components/UI.jsx'
import styles from './ServicesPage.module.css'

export default function ServicesPage() {
  const [services, setServices] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const navigate = useNavigate()

  useEffect(() => {
    api.getServices()
      .then(setServices)
      .catch(e => setError(e.message))
      .finally(() => setLoading(false))
  }, [])

  return (
    <div className="animate-in">
      <PageHeader
        title="Servicios disponibles"
        subtitle="Selecciona un servicio para registrar una cita"
        action={
          <Button onClick={() => navigate('/appointments/new')}>
            + Nueva cita
          </Button>
        }
      />

      {loading && <Spinner />}
      {error && <Alert type="error">{error}</Alert>}

      {!loading && !error && (
        <div className={styles.grid}>
          {services.map(s => (
            <div key={s.id} className={styles.card}>
              <div className={styles.cardTop}>
                <span className={styles.icon}>{getIcon(s.name)}</span>
                <span className={styles.duration}>{s.duration} min</span>
              </div>
              <h3 className={styles.name}>{s.name}</h3>
              <p className={styles.desc}>{s.description}</p>
              <Button
                variant="ghost"
                size="sm"
                className={styles.cta}
                onClick={() => navigate('/appointments/new', { state: { serviceId: s.id } })}
              >
                Reservar →
              </Button>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

function getIcon(name = '') {
  const n = name.toLowerCase()
  if (n.includes('cabello') || n.includes('corte')) return '✂️'
  if (n.includes('académic') || n.includes('tutoría') || n.includes('tutoria')) return '📚'
  if (n.includes('técnic') || n.includes('tecnic')) return '🔧'
  if (n.includes('nutri')) return '🥗'
  return '📅'
}
