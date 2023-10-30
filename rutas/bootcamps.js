const express= require('express')
const router = express.Router()


// endpoints: uri de bootcamps
// 
//obtener todos los bootcamps 
router.get('/' , (request , response) => {

    response
        .status(200)
        .json({
            "productos": [
            {
            "id": 1,
            "producto": "Comida para perro marca DogCant",
            "cantidad":"20",
            "Empresa": "Mis comiditas"
            },
            {
            "id": 2,
            "producto": "Comida para gato marca MyCat",
            "cantidad":"20",
            "Empresa": "Gatito Lindo"
            }
            ]
            })
})

//Obtener bootcamps por id

router.get('/:id' , (request , response) => {

    response
        .status(200)
        .json({
            "sucess": true,
            "msg": `Obteniendo bootcamp con id ${request.params.id}`
        })
})

//crear bootcamps
router.post('/' , (request , response) => {

    response
        .status(200)
        .json({
            "id": 3,
            "producto": "Comida para gato marca lovecat",
            "cantidad":"60",
            "Empresa": "lovecat"
        })
})

//actualizar el bootcamp por id
router.put('/:id' , (request , response) => {

    response
        .status(200)
        .json({
            "id": 3,
            "producto": "Comida para gato marca lovecat",
            "cantidad":"100",
            "Empresa": "lovecat"
        })
})


//eliminar el bootcamp por id
router.delete('/:id' , (request , response) => {

    response
        .status(200)
        .json({
            "id": 3,
            "Estado": "Ya no existe"
        })
})


//exportar(commonjs) router
module.exports = router