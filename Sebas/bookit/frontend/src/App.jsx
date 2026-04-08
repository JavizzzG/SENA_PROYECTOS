import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom'
import ServicesPage from './pages/ServicesPage.jsx'
import AppointmentsPage from './pages/AppointmentsPage.jsx'
import NewAppointmentPage from './pages/NewAppointmentPage.jsx'
import styles from './App.module.css'

export default function App() {
  return (
    <BrowserRouter>
      <div className={styles.layout}>
        <header className={styles.header}>
          <div className={styles.headerInner}>
            <div className={styles.brand}>
              <span className={styles.brandMark}>B</span>
              <span className={styles.brandName}>BookIt</span>
            </div>
            <nav className={styles.nav}>
              <NavLink to="/" end className={({ isActive }) => isActive ? `${styles.navLink} ${styles.active}` : styles.navLink}>
                Servicios
              </NavLink>
              <NavLink to="/appointments" className={({ isActive }) => isActive ? `${styles.navLink} ${styles.active}` : styles.navLink}>
                Citas
              </NavLink>
              <NavLink to="/appointments/new" className={({ isActive }) => isActive ? `${styles.navLink} ${styles.active}` : styles.navLink}>
                + Nueva cita
              </NavLink>
            </nav>
          </div>
        </header>

        <main className={styles.main}>
          <Routes>
            <Route path="/" element={<ServicesPage />} />
            <Route path="/appointments" element={<AppointmentsPage />} />
            <Route path="/appointments/new" element={<NewAppointmentPage />} />
          </Routes>
        </main>

        <footer className={styles.footer}>
          <span>BookIt © {new Date().getFullYear()} — Sistema de reservas de citas</span>
        </footer>
      </div>
    </BrowserRouter>
  )
}
