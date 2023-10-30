const express= require('express')
const router = express.Router()


//reviews 
//###################################################################################


//obtener todos los reviews 
app.get('/' , (request , response) => {

    response
        .status(200)
        .json({
            "Sucess": true,
            "msg":"Aquí van a mostrarse los reviews"
        })
})

//obtener el reviews por id
app.get('/:id' , (request , response) => {

    response
        .status(200)
        .json({
            "sucess": true,
            "msg": `Obteniendo reviews con id ${request.params.id}`
        })
})

//crear reviews

app.post('/' , (request , response) => {

    response
        .status(200)
        .json({
            "Sucess": true,
            "msg":"Aquí se van a crear reviews"
        })
})

//actualizar el reviews por id
app.put('/:id' , (request , response) => {

    response
        .status(200)
        .json({
            "sucess": true,
            "msg": `actualizando reviews con id ${request.params.id}`
        })
})


//eliminar el reviews por id
app.delete('/:id' , (request , response) => {

    response
        .status(200)
        .json({
            "sucess": true,
            "msg": `eliminando reviews con id ${request.params.id}`
        })
})


module.exports = router