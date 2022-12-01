//const express =require('express');
import express from 'express';
import dataBase from './database/conexcionDatabase.js';
import { productoRouter } from './routes/productoRoute.js';
const app = express()

app.use('/producto', productoRouter)

try {
    dataBase.authenticate()
    console.log('Conexion exitosa')
} catch (error) {
    console.log(error)
}

app.listen(3100, ()=>{
    console.log('servidor corriendo en el puerto 3100')
    console.log('http://localhost:3100')
})