# Componentes de GymFlow

## WorkoutCard

### Descripción

Componente reutilizable encargado de mostrar la información de una rutina de entrenamiento.

### Props

```typescript
interface WorkoutCardProps {
  workout: Workout;
  onDelete?: (id: number) => void;
}
```

### Funcionalidades

* Mostrar nombre de la rutina.
* Mostrar categoría.
* Mostrar número de ejercicios.
* Mostrar si la rutina es favorita.
* Permitir eliminar la rutina.

### Ejemplo de uso

```tsx
<WorkoutCard
  workout={workout}
  onDelete={handleDelete}
/>
```

---

## WorkoutForm

### Descripción

Formulario controlado para crear nuevas rutinas.

### Estado gestionado

* nombre
* categoria
* ejercicios

### Funcionalidades

* Captura de datos mediante inputs controlados.
* Validación básica de datos.
* Envío de información a la API.
* Limpieza automática del formulario tras crear una rutina.

### Ejemplo de uso

```tsx
<WorkoutForm />
```

## Ventajas de la reutilización

La separación en componentes permite:

* Reutilizar código.
* Facilitar el mantenimiento.
* Mejorar la legibilidad.
* Reducir duplicación.
