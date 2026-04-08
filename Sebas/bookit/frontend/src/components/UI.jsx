import styles from './UI.module.css'

export function Spinner() {
  return <div className={styles.spinner} aria-label="Cargando..." />
}

export function Alert({ type = 'error', children }) {
  return <div className={`${styles.alert} ${styles[type]}`}>{children}</div>
}

export function Badge({ status }) {
  const map = {
    PENDING:   { label: 'Pendiente',  cls: styles.badgePending },
    DONE:      { label: 'Atendida',   cls: styles.badgeDone },
    CANCELLED: { label: 'Cancelada',  cls: styles.badgeCancelled },
  }
  const { label, cls } = map[status] || { label: status, cls: '' }
  return <span className={`${styles.badge} ${cls}`}>{label}</span>
}

export function Button({ variant = 'primary', size = 'md', loading, children, ...props }) {
  return (
    <button
      className={`${styles.btn} ${styles[`btn-${variant}`]} ${styles[`btn-${size}`]}`}
      disabled={loading || props.disabled}
      {...props}
    >
      {loading ? <span className={styles.btnSpinner} /> : null}
      {children}
    </button>
  )
}

export function Card({ children, className = '' }) {
  return <div className={`${styles.card} ${className}`}>{children}</div>
}

export function PageHeader({ title, subtitle, action }) {
  return (
    <div className={styles.pageHeader}>
      <div>
        <h1 className={styles.pageTitle}>{title}</h1>
        {subtitle && <p className={styles.pageSubtitle}>{subtitle}</p>}
      </div>
      {action}
    </div>
  )
}
