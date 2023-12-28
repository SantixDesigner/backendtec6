import express from 'express'
import cors from 'cors'
import { RouterForm } from './RouterForm.js'
import pkg from 'body-parser'
const {urlencoded} = pkg
class Server{
    #app
    #server
    constructor(){
        this.#app = express()
        this.#app.use(cors())
        this.#app.use(express.json())
        this.#app.use(urlencoded({extended: true}))
        this.#app.use(RouterForm)
    }

    async conectar({port=0}){
        this.#server = this.#app.listen(port)
        console.log(this.#server.address().port)
    }
}

const server = new Server()

await server.conectar({port: 8080})