const express = require('express');
const { sendEmail } = require('../utils/sendEmail');
const router = express.Router();

// colocar las rutas aquí
router.get('/', (req, res) => {
    res.send("Welcome to express");
});


router.post('/emails/contact', async (req, res) => {

    const { name, email, phone, message } = req.body


    await sendEmail({
        to: '4rprogramming@gmail.com',
        subject: `Hola soy ${name} y te he dejado un mensaje`,
        html: `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
                <h2 style="color: #333;">¡Nuevo mensaje de contacto!</h2>
                <h1 style="color: red;">${name} con ${email} y teléfono ${phone}, ha enviado el siguiente mensaje:</h1>
                <h5 style="color: blue;">${message}</h5>
            </div>
        `

    })

    return res.json('Email Enviado')
})

module.exports = router;
