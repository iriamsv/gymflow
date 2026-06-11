# API REST de GymFlow

## Base URL

```text
http://localhost:3000/api/v1
```

## Obtener todas las rutinas

### Request

```http
GET /workouts
```

### Response

```json
[
  {
    "id": 1,
    "nombre": "Piernas + Glúteos",
    "categoria": "Piernas",
    "ejercicios": 5,
    "favorita": true
  }
]
```

---

## Obtener una rutina por ID

### Request

```http
GET /workouts/:id
```

### Response

```json
{
  "id": 1,
  "nombre": "Piernas + Glúteos",
  "categoria": "Piernas",
  "ejercicios": 5,
  "favorita": true
}
```

---

## Crear una rutina

### Request

```http
POST /workouts
```

### Body

```json
{
  "nombre": "Hombros",
  "categoria": "Hombro",
  "ejercicios": 4
}
```

### Response

```json
{
  "id": 123456,
  "nombre": "Hombros",
  "categoria": "Hombro",
  "ejercicios": 4,
  "favorita": false
}
```

---

## Eliminar una rutina

### Request

```http
DELETE /workouts/:id
```

### Response

```json
{
  "id": 123456,
  "nombre": "Hombros",
  "categoria": "Hombro",
  "ejercicios": 4,
  "favorita": false
}
```
