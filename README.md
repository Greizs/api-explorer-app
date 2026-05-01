# API Explorer

Aplicación web fullstack que consume APIs externas a través de un backend proxy propio. Proyecto de portafolio que demuestra arquitectura frontend/backend moderna, buenas prácticas de CI/CD y despliegue en producción.

**[Demo en vivo](https://api-explorer-app-z9ha.vercel.app/)** · **[Backend API](https://api-explorer-app-inut.onrender.com/health)**

---

## Tecnologías

**Frontend**
- [Next.js 14](https://nextjs.org/) — App Router, TypeScript, componentes server/client
- [Tailwind CSS](https://tailwindcss.com/) — Estilos utility-first
- [Axios](https://axios-http.com/) — Cliente HTTP con soporte de interceptores

**Backend**
- [Node.js](https://nodejs.org/) + [Express](https://expressjs.com/) — Servidor proxy REST
- TypeScript — Código de servidor con tipado estático

**DevOps**
- GitHub Actions — Pipeline de CI (type check, lint, build)
- [Vercel](https://vercel.com/) — Despliegue del frontend
- [Render](https://render.com/) — Despliegue del backend

---

## Arquitectura

```
Cliente (Navegador)
    └── Frontend Next.js (Vercel)
            └── Backend Express / BFF (Render)
                    └── API Externa (JSONPlaceholder)
```

El backend actúa como **Backend-For-Frontend (BFF)**: hace de intermediario con las APIs externas, mantiene las credenciales en el servidor y centraliza la configuración de CORS. El frontend está organizado en capas: `types → services → hooks → components`.

---

## Instalación local

### Requisitos
- Node.js 20+
- npm

### Backend

```bash
cd backend
npm install
cp .env.example .env   # Completa tus valores
npm run dev            # Inicia en http://localhost:4000
```

### Frontend

```bash
cd frontend
npm install
cp .env.example .env.local   # Completa tus valores
npm run dev                  # Inicia en http://localhost:3000
```

---

## Variables de entorno

### `backend/.env`

```env
PORT=4000
EXTERNAL_API_URL=https://jsonplaceholder.typicode.com
FRONTEND_URL=http://localhost:3000
```

### `frontend/.env.local`

```env
NEXT_PUBLIC_API_URL=http://localhost:4000
```

> En producción, asigna `NEXT_PUBLIC_API_URL` a la URL de tu backend en Render y `FRONTEND_URL` a la URL de tu frontend en Vercel.

---

## Scripts

### Backend

| Script | Descripción |
|--------|-------------|
| `npm run dev` | Servidor de desarrollo con hot reload (`ts-node-dev`) |
| `npm run build` | Compila TypeScript a `dist/` |
| `npm start` | Ejecuta el build de producción |

### Frontend

| Script | Descripción |
|--------|-------------|
| `npm run dev` | Servidor de desarrollo (Turbopack) |
| `npm run build` | Build de producción |
| `npm run lint` | Revisión con ESLint |

---

## Despliegue

### Frontend → Vercel
1. Importa el repositorio en Vercel
2. Configura el **Root Directory** como `frontend`
3. Agrega la variable de entorno: `NEXT_PUBLIC_API_URL=https://tu-backend.onrender.com`

### Backend → Render
1. Crea un nuevo **Web Service** en Render
2. Configura el **Root Directory** como `backend`
3. Build command: `npm ci && npm run build`
4. Start command: `npm start`
5. Agrega las variables: `EXTERNAL_API_URL`, `FRONTEND_URL`

> El archivo `backend/render.yaml` gestiona la configuración del servicio automáticamente.

---

## Estructura del proyecto

```
api-explorer-app/
├── .github/
│   └── workflows/
│       └── ci.yml                  # Pipeline de CI
├── frontend/
│   ├── src/
│   │   ├── app/
│   │   │   ├── posts/[id]/
│   │   │   │   └── page.tsx        # Página de detalle
│   │   │   ├── layout.tsx          # Layout raíz + Navbar
│   │   │   └── page.tsx            # Inicio — grid de posts
│   │   ├── components/
│   │   │   ├── Navbar.tsx
│   │   │   ├── PostCard.tsx
│   │   │   └── SkeletonCard.tsx
│   │   ├── hooks/
│   │   │   └── usePosts.ts         # Hooks de fetching
│   │   ├── services/
│   │   │   └── posts.service.ts    # Llamadas HTTP con Axios
│   │   └── types/
│   │       └── post.types.ts       # Interfaces TypeScript
│   ├── .env.example
│   └── vercel.json
└── backend/
    ├── src/
    │   ├── config/
    │   │   └── env.ts              # Validación de variables (fail-fast)
    │   ├── controllers/
    │   │   └── posts.controller.ts
    │   ├── routes/
    │   │   └── posts.routes.ts
    │   └── index.ts                # Punto de entrada Express
    ├── .env.example
    └── render.yaml
```

---

## Pipeline de CI

En cada push a `main` o `develop`, GitHub Actions ejecuta automáticamente:

- **Backend**: Verificación de tipos con TypeScript
- **Frontend**: Verificación de tipos → ESLint → Build de producción

Los Pull Requests hacia `main` deben pasar todos los checks antes de poder hacer merge.

---

## Mejoras futuras

- [ ] Autenticación con JWT
- [ ] Búsqueda y filtrado de posts
- [ ] Paginación
- [ ] Tests unitarios (Vitest + Testing Library)
- [ ] Base de datos real (PostgreSQL con Prisma)
- [ ] Modo oscuro

---

## Autor

**[bran](https://github.com/Greizs)**
