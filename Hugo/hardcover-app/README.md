# 📚 Hardcover Nonfiction – Angular 20 App

Explorador de libros de no-ficción usando la API GraphQL de Hardcover.

---

## 🏗️ Arquitectura

```
Angular (puerto 4200)  →  Express Proxy (puerto 3001)  →  api.hardcover.app
```

> **¿Por qué el proxy?**  
> La API de Hardcover bloquea llamadas directas desde el browser (CORS).  
> El proxy Express reenvía las peticiones con el token de autorización.

---

## 🚀 Cómo correr el proyecto

### 1. Backend (proxy)

```bash
cd backend
npm install
npm start
# ✅ Hardcover proxy running → http://localhost:3001
```

### 2. Frontend (Angular)

En otra terminal:

```bash
cd frontend
npm install
npm start
# Angular arranca en http://localhost:4200
```

### 3. Abrir el navegador

```
http://localhost:4200
```

---

## 📁 Estructura

```
hardcover-app/
├── backend/
│   ├── server.js          # Proxy Express con el token
│   └── package.json
└── frontend/              # Angular 20 standalone
    ├── angular.json
    ├── proxy.conf.json    # Redirige /api → localhost:3001
    ├── src/
    │   ├── main.ts
    │   ├── styles.scss    # Design system global
    │   └── app/
    │       ├── app.component.ts
    │       ├── app.config.ts
    │       ├── app.routes.ts
    │       ├── models/
    │       │   └── book.model.ts
    │       ├── services/
    │       │   └── hardcover.service.ts
    │       └── components/
    │           ├── nav-header/   # Barra de navegación + buscador
    │           ├── home/         # Trending + filtros por género
    │           ├── book-card/    # Tarjeta reutilizable
    │           ├── book-detail/  # Página de detalle
    │           └── search-results/ # Resultados de búsqueda
    └── package.json
```

---

## ✨ Features

- **Trending Nonfiction**: portada con el libro #1, grid del resto
- **Filtros por género**: All / Biography / History / Science / Economics / Politics / Philosophy / Psychology / Technology
- **Búsqueda**: busca por título, autor o tema
- **Detalle de libro**: descripción, rating, estadísticas, enlace a Hardcover
- **Diseño editorial oscuro**: Playfair Display + DM Sans, paleta ink/gold
- **Responsive**: mobile-first

---

## 🔑 Token

El token está hardcodeado en `backend/server.js`. Cuando expire (1 año), reemplázalo ahí.
