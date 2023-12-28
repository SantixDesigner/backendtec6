import express from 'express';
import { mailer } from './Nodemailer.js';
import multer from 'multer';

export const RouterForm = express();
const upload = multer();

RouterForm.post('/form', upload.single('pdf'), async (req, res) => {
    // Accede a los datos del formulario
    const name = req.body.name;
    const email = req.body.email;
    const doc = req.body.doc;
    const mensaje = req.body.mensaje;
    const pdf = req.file; // Accede al archivo adjunto
    console.log(pdf)

    // Tu lógica de manejo del formulario aquí
    res.json(await mailer.enviarForm(name, email, mensaje, doc, pdf));
});