const express= require('express')
const router = express.Router()

//Cursos
//###################################################################################


//obtener todos los cursos 
router.get('/' , (request , response) => {

    response
        .status(200)
        .json({
            "user": [
                {
                "id": 1,
                "nombre empresa": "Mis comiditas",
                "emcargado":"Luisa Baquero",
                "tipo de comida": "para perro"
                },
                {
                "id": 2,
                "producto": "Comida para gato marca MyCat",
                "cantidad":"20",
                "Empresa": "Gatito Lindo",
                }
                ]
        })
})

//obtener el cursos por id
router.get('/:id' , (request , response) => {

    response
        .status(200)
        .json({
            "sucess": true,
            "msg": `Obteniendo cursos con id ${request.params.id}`
        })
})

//crear cursos

router.post('/' , (request , response) => {

    response
        .status(200)
        .json({
            "Sucess": true,
            "msg":"Aquí se van a crear cursos"
        })
})

//actualizar el cursos por id
router.put('/:id' , (request , response) => {

    response
        .status(200)
        .json({
            "sucess": true,
            "msg": `actualizando cursos con id ${request.params.id}`
        })
})


//eliminar el cursos por id
router.delete('/:id' , (request , response) => {

    response
        .status(200)
        .json({
            "sucess": true,
            "msg": `eliminando cursos con id ${request.params.id}`
        })
})

module.exports = router

