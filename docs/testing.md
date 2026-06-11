# Pruebas realizadas

## Backend

### GET /api/v1/workouts

Resultado esperado:

* Devuelve un array de rutinas.
* Código HTTP 200.

### GET /api/v1/workouts/:id

Resultado esperado:

* Devuelve la rutina solicitada.
* Código HTTP 200.

Prueba de error:

* ID inexistente.
* Código HTTP 404.

### POST /api/v1/workouts

Resultado esperado:

* Crea una nueva rutina.
* Código HTTP 201.

Prueba de error:

* Datos incompletos.
* Código HTTP 400.

### DELETE /api/v1/workouts/:id

Resultado esperado:

* Elimina una rutina existente.
* Código HTTP 200.

Prueba de error:

* ID inexistente.
* Código HTTP 404.

## Frontend

### Navegación

Se verificó el funcionamiento de:

* Dashboard
* Rutinas
* Estadísticas
* Página 404

### Formularios

Se comprobó:

* Creación de nuevas rutinas.
* Actualización correcta de los campos.
* Envío de datos a la API.

### Estados de red

Se verificó:

* Loading.
* Error.
* Success.

## Responsive

Se comprobó el correcto funcionamiento en diferentes tamaños de ventana.
