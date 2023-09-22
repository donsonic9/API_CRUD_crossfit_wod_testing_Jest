# API basica con NodeJS, Express, y JavaScript

Api con CRDU basico, usa archivo JSON como base de datos. con extenciones como dotenv, express, bodyParser, uuid.
 Esta API tambien es utilizada para testear y probar el uso de Jest en testing.

Para ejecutar en shell

```shell
npm start
```

Para iniciar con nodemon

```shell
npm run dev
```

- Basepath: localhost:3000/api/v1/workouts

- En el archivo .env solo hace falta declarar el PORT=3000

# Formato del elemento JSON para crear o actualizar un elemento:

Los elementos que se envien deben tener el siguiente formato como en el ejemplo:

```
{
  "name": "Core Buster",
  "mode": "AMRAP 20",
  "equipment": [
    "rack",
    "barbell",
    "abmat"
  ],
  "exercises": [
    "15 toes to bars",
    "10 thrusters",
    "30 abmat sit-ups"
  ],
  "trainerTips": [
    "Split your toes to bars into two sets maximum",
    "Go unbroken on the thrusters",
    "Take the abmat sit-ups as a chance to normalize your breath"
  ]
}
```

* En caso de actualizar, incluir el id en la URL.
