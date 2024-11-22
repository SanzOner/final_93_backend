import express from 'express'

const pruebaRouter = express.Router()

pruebaRouter.get('/saludo', (solicitud, respuesta )=>{
    respuesta.send("Hola mundo")
})


//ruta para request
pruebaRouter.post('/registro', (req, res)=>{
    console.log(req.body)
    res.status(200).json({
        "Mensaje": "Registro exitoso",
        "datos": {
            "email": req.body.email,
            "password": req.body.paswword
        }
    })
})


export default pruebaRouter