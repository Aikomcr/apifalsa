const express= require('express')
const router = express.Router()



//user 
//###################################################################################


//obtener todos los users 
router.get('/' , (request , response) => {

    response
        .status(200)
        .json({
            "Nombre": "Alicia",
            "Empresa":"Mi nuevo perro",
            "Tipo de productos": "Comida para perros",
            "Nit":"1223390392828",
            "Numeero de identificación": "36488191"

        })
})

//obtener el users por id
router.get('/:id' , (request , response) => {

    response
        .status(200)
        .json({
            "id":1,
            "Nombre": "Maryom",
            "Empresa":"Catilovers",
            "Tipo de productos": "Comida para gatos",
            "Nit":"9988999990900",
            "Numeero de identificación": "1028661203"
        })
})

//crear cursos

router.post('/' , (request , response) => {

    response
        .status(200)
        .json({
            "id":1,
            "Nombre": "claudia",
            "Empresa":"minigatitos",
            "Tipo de productos": "Comida para gatos",
            "Nit":"0000000999",
            "Numeero de identificación": "09824838743"
        })
})

//actualizar el users por id
router.put('/:id' , (request , response) => {

    response
        .status(200)
        .json({
            "id":1,
            "Nombre": "Maryom",
            "Empresa":"Catilovers",
            "Tipo de productos": "Comida para gatos y perros",
            "Nit":"9988999990900",
            "Numeero de identificación": "1028661203"
        })
})


//eliminar el users por id
router.delete('/:id' , (request , response) => {

    response
        .status(200)
        .json({
            "id":1,
            "Estado": "No existe"
        })
})



//exportar(commonjs) router
module.exports = router