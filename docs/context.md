# Context API en GymFlow

## Objetivo

Se utiliza Context API para compartir el estado global de las rutinas entre distintos componentes sin necesidad de prop drilling.

## WorkoutContext

El contexto principal de la aplicación es `WorkoutContext`.

Este contexto almacena:

* Lista de rutinas (`workouts`)
* Estado de carga (`loading`)
* Estado de error (`error`)

## WorkoutProvider

El Provider envuelve toda la aplicación y proporciona acceso al estado compartido.

```tsx
<WorkoutProvider>
  <App />
</WorkoutProvider>
```

## Consumo del contexto

Para acceder a los datos se utiliza el hook personalizado:

```tsx
const {
  workouts,
  loading,
  error
} = useWorkouts();
```

## Ventajas

* Estado centralizado.
* Menor complejidad en la comunicación entre componentes.
* Reutilización sencilla mediante hooks personalizados.
* Escalable para futuras funcionalidades.
