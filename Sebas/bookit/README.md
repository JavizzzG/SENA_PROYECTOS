# BookIt — Sistema de reservas de citas

Aplicación web full stack para gestionar servicios y reservas de citas.

## Stack

| Capa      | Tecnología                              |
|-----------|-----------------------------------------|
| Frontend  | React 18 + Vite, servido con Nginx      |
| Backend   | Spring Boot 3 + JDK 21 + JPA + Flyway  |
| Base datos| PostgreSQL 16                           |

---

## Imágenes en Docker Hub

```
javizzzg/sebas-bookit-back:latest
javizzzg/sebas-bookit-front:latest
```


---

## Ejecutar la aplicación

```bash
# 1. (Opcional) Clonar o crear .env con la estructura que presenta .env.example
cp .env.example .env

# 2. Levantar todos los servicios
docker compose up -d
```

### URLs de acceso

| Servicio  | URL                              |
|-----------|----------------------------------|
| Frontend  | http://localhost:80              |
| Backend   | http://localhost:8080            |
| Health    | http://localhost:8080/health     |

---

## Endpoints del backend

| Método | Ruta                          | Descripción                     |
|--------|-------------------------------|---------------------------------|
| GET    | /health                       | Estado del servicio             |
| GET    | /services                     | Listar servicios disponibles    |
| GET    | /appointments?status=PENDING  | Listar citas (filtro opcional)  |
| POST   | /appointments                 | Crear nueva cita                |
| PATCH  | /appointments/:id/status      | Cambiar estado de una cita      |
| DELETE | /appointments/:id             | Eliminar una cita               |

### Estados de cita

- `PENDING` → estado inicial
- `DONE` → marcar como atendida
- `CANCELLED` → cancelar

### Reglas de negocio

- Una cita cancelada **no puede** marcarse como atendida.
- Una cita atendida **no puede** cancelarse.
- No se puede crear una cita sin servicio asociado.

---

## Verificar que todo funciona

```bash
docker compose ps          # todos los servicios deben estar "healthy"
docker compose logs -f     # ver logs en tiempo real

# Probar el backend manualmente
curl http://localhost:8080/health
curl http://localhost:8080/services
```

---

## Reconstruir desde cero

```bash
docker compose down -v     # elimina contenedores y volúmenes
docker compose up -d       # levanta de nuevo
```
