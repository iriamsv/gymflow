# Hooks utilizados en GymFlow

## useState

Se utiliza para gestionar estados locales en componentes.

Ejemplos:

* Estado de formularios.
* Estado de carga.
* Estado de error.
* Estado de rutinas.

## useEffect

Se utiliza para ejecutar efectos secundarios.

Ejemplo:

* Cargar las rutinas desde la API al iniciar la aplicación.

## useMemo

Se utiliza para memorizar cálculos derivados.

Ejemplos:

* Total de rutinas.
* Total de ejercicios.
* Total de rutinas favoritas.

Esto evita recalcular información cuando los datos no han cambiado.

## useCallback

Se utiliza para memorizar funciones.

Ejemplo:

* Función para eliminar rutinas.

Esto evita recrear la función en cada renderizado.

## Custom Hook: useWorkouts

Hook personalizado que encapsula el acceso al contexto global de rutinas.

### Ventajas

* Simplifica el acceso al estado.
* Reduce código repetido.
* Mejora la mantenibilidad.

### Ejemplo

```tsx
const {
  workouts,
  loading,
  error
} = useWorkouts();
```
