const express = require('express');
const v1WorkoutRouter = require('./v1/routes/workoutRoutes')
// con esta configuracion ya estamos creando un servidor con Express
const app = express();
const bodyParser = require("body-parser");
// para usar variables de entorno con dotenv
require('dotenv').config();

// Establece el numero de puerto para la api
const PORT = process.env.PORT// || 3000;

// trae todo lo que tenemos en el routes, en esa url.
app.use(bodyParser.json());
app.use("/api/v1/workouts", v1WorkoutRouter);
// traemos el parse para mandar JSON con Express
app.use(express.json());

// le dice donde debemos escuchar el puerto
app.listen(PORT, () => {console.log(` - Server listening on port ${PORT}`)});

// investigar dotenv
// investigar thunder client or rest client for testing http