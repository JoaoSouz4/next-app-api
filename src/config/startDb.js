import mongoose from "mongoose";
import dotenv from 'dotenv';

dotenv.config();

export async function startDB(){

    try {
        await mongoose.connect(process.env.URL_DATABASE, {});
        console.log('Conectado com o banco de dados')
    } catch(err){
        console.error('Erro ao conectar ao mongoDb', err)
    }
}