import mongoose from "mongoose";

const { Schema } = mongoose


const serviceSchema = new Schema({
    price: Number,
    nameService: String,
})

const processSchema = new Schema({
    services: [serviceSchema], 
    technical: String,
    status: {
        type: String,
        enum: ['Pendente', 'Para retirada', 'Retirado', 'Devolver', 'Devolvido'],
        default: 'Pendente'
    },
    removedAt: Date,
    payment: {
        isPay: {type: Boolean, default: false},
        total: {type: Number, default: 0},
        paymentForm: {type: String, default: "Não informado"}
    }

}, {timestamps: true})

const deviceSchema = new Schema({
    devicesName: String, 
    process: [processSchema] 
}, {timestamps: true});


const clientSchema = new Schema({
    name: String,
    lastname: String,
    phone1: Number,
    phone2: Number,
    devices: [deviceSchema]

}, {timestamps: true});


const Client = mongoose.model('Client', clientSchema);

export default Client;

