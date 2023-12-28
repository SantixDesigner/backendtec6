import nodemailer from 'nodemailer'

class Nodemailer {
    constructor() {
        this.mailOptions = nodemailer.createTransport({
            service: 'gmail',
            port: 587,
            auth: {
                user: 'escuelatecnica6mails@gmail.com',
                pass: 'xkmk ufel imnc dsbx'
            }
        })
    }

    async enviarForm(nombre, email, mensaje, documento, pdf) {
        try {
            const option = {
                from: email,
                to: 'escuelatecnica6mails@gmail.com',
                subject: `inscripcion de ${nombre}`,
                html: `
              <p>Nombre: ${nombre}</p>
              <p>Email: ${email}</p>
              <p>Documento: ${documento}</p>
              <p>Mensaje: ${mensaje}</p>
              <p>Adjuntos:</p>
            `,
                attachments: [
                    {
                        filename: 'documento.pdf',
                        content: pdf.buffer,
                        cid: 'pdf@nodemailer',
                    }
                ],
            };
            this.mailOptions.sendMail(option, (err) => {
                console.log(err)
            })
            return {
                name: nombre,
                email: email,
                mensaje: mensaje,
                documento: documento
            }
        }
        catch (err) {
            console.log(err)
        }
    }
}

export const mailer = new Nodemailer()