# GymFlow 💪

GymFlow es una aplicación fullstack para la gestión de entrenamientos y rutinas de gimnasio.

Permite crear, consultar y eliminar rutinas de entrenamiento mediante una interfaz desarrollada con React y una API REST desarrollada con Express.

---

## Tecnologías utilizadas

### Frontend

* React
* TypeScript
* Tailwind CSS
* React Router
* Context API

### Backend

* Node.js
* Express
* CORS

### Herramientas

* Git
* GitHub
* Trello
* Vercel

---

## Funcionalidades

### Gestión de rutinas

* Visualizar rutinas disponibles.
* Crear nuevas rutinas.
* Eliminar rutinas.
* Consultar rutinas desde una API REST.

### Estadísticas

* Total de rutinas.
* Total de ejercicios.
* Rutinas favoritas.

### Navegación

* Dashboard.
* Rutinas.
* Estadísticas.
* Página 404.

### Gestión de estado

* Context API.
* Custom Hook (`useWorkouts`).

### Estados de red

* Loading.
* Error.
* Success.

---

## Arquitectura

### Frontend

```text
client/src
├── api
├── components
├── context
├── hooks
├── pages
├── types
└── utils
```

### Backend

```text
server/src
├── routes
├── controllers
├── services
└── config
```

### Flujo de datos

```text
React
↓
API Client
↓
Express
↓
Controllers
↓
Services
```

---

## API REST

Base URL:

```text
http://localhost:3000/api/v1
```

Endpoints disponibles:

| Método | Endpoint      | Descripción               |
| ------ | ------------- | ------------------------- |
| GET    | /workouts     | Obtener todas las rutinas |
| GET    | /workouts/:id | Obtener una rutina        |
| POST   | /workouts     | Crear una rutina          |
| DELETE | /workouts/:id | Eliminar una rutina       |

---

## Instalación

### Clonar repositorio

```bash
git clone <URL_DEL_REPOSITORIO>
```

---

### Frontend

```bash
cd client
npm install
npm run dev
```

Aplicación disponible en:

```text
http://localhost:5173
```

---

### Backend

```bash
cd server
npm install
npm run dev
```

API disponible en:

```text
http://localhost:3000
```

---

## Gestión del proyecto

Tablero Trello:

https://trello.com/b/MeVVdCIs/gymflow-development

---

## Documentación

Toda la documentación del proyecto se encuentra en la carpeta:

```text
docs/
```

Incluye:

* Agile
* Idea del proyecto
* Gestión del proyecto
* Arquitectura
* Componentes
* Hooks
* Context API
* Routing
* API REST
* Cliente API
* Testing
* Deployment
* Retrospectiva

---

## Despliegue

Frontend desplegado en Vercel:



---

## Autor

Iria María Suárez Vélez

Proyecto desarrollado como práctica de desarrollo Fullstack con React, TypeScript y Express.
