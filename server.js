const express = require('express')
const cors = require('cors');

//rutas de bootcamps
const bootcampRoutes = require('./rutas/bootcamps')
const userspRoutes = require('./rutas/users')

//Crear el objeto principal de la api 

const app = express()
app.use(cors());

//vincular rutas al objeto app
app.use("/api/v1/devcamp/bootcamps", bootcampRoutes)
app.use("/api/v1/devcamp/users", userspRoutes)

//Crear el servidor de aplicación
app.listen( 5000 , 
          console.log( 'Servidor ejecutando en puerto ' + 5000 ))