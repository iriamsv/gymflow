# Diseño y arquitectura de GymFlow

## Arquitectura general

GymFlow es una aplicación fullstack compuesta por:

* Frontend desarrollado con React, TypeScript y Tailwind CSS.
* Backend desarrollado con Node.js y Express.
* Comunicación mediante una API REST.

El flujo de datos es:

Frontend → API Client → Express → Controllers → Services

## Frontend

La estructura principal del frontend es:

src/
├── api/
├── components/
├── context/
├── hooks/
├── pages/
├── types/
└── utils/

### Componentes reutilizables

* WorkoutCard
* WorkoutForm

### Páginas

* DashboardPage
* WorkoutsPage
* StatsPage
* NotFoundPage

### Gestión de estado

Se utiliza Context API para compartir el estado de las rutinas entre componentes.

Además, se ha creado el custom hook `useWorkouts()` para simplificar el acceso al contexto.

## Backend

La API sigue una arquitectura por capas:

server/src/
├── routes/
├── controllers/
├── services/
└── config/

### Routes

Definen las rutas HTTP disponibles.

### Controllers

Reciben las peticiones HTTP y generan las respuestas.

### Services

Contienen la lógica de negocio y el acceso a los datos.

## API REST

Endpoint principal:

/api/v1/workouts

Operaciones disponibles:

* GET /api/v1/workouts
* GET /api/v1/workouts/:id
* POST /api/v1/workouts
* DELETE /api/v1/workouts/:id

## Persistencia

Actualmente los datos se almacenan en memoria mediante arrays de JavaScript.

En futuras versiones podría añadirse una base de datos relacional o NoSQL.

## Flujo de datos

1. React solicita datos mediante el API Client.
2. El API Client realiza peticiones HTTP a Express.
3. Express procesa la solicitud mediante Routes, Controllers y Services.
4. La respuesta vuelve al frontend.
5. El Context actualiza el estado compartido.
