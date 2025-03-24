import mongoose from "mongoose";
import { Schema } from "mongoose";

const clientSchema = new Schema({
    name: String,
    lastname: String,
    phone1: Number,
    phone2: Number,
}, {timestamps: true});


const Client = mongoose.model('Client', clientSchema);

export default Client;

