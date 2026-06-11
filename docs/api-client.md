# Cliente API y contratos de tipos

## Objetivo

El cliente API centraliza todas las peticiones HTTP realizadas desde React hacia el backend Express.

Esto permite separar la lógica de red de los componentes.

## Archivo principal

```text
src/api/client.ts
```

## Funciones implementadas

### obtenerWorkouts()

Obtiene todas las rutinas disponibles.

```typescript
const workouts = await obtenerWorkouts();
```

### crearWorkout()

Permite crear una nueva rutina.

```typescript
await crearWorkout({
  nombre: "Hombros",
  categoria: "Hombro",
  ejercicios: 4
});
```

### eliminarWorkout()

Permite eliminar una rutina por identificador.

```typescript
await eliminarWorkout(id);
```

## Contrato de tipos

La interfaz principal utilizada es:

```typescript
export interface Workout {
  id: number;
  nombre: string;
  categoria: string;
  ejercicios: number;
  favorita: boolean;
}
```

El frontend y el backend utilizan la misma estructura de datos para mantener consistencia en la aplicación.

## Estados de red

La aplicación gestiona tres estados:

* Loading
* Success
* Error

Estos estados se almacenan en el contexto global y se muestran en la interfaz cuando corresponde.
