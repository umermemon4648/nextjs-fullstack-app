import mongoose from "mongoose";
const schema = new mongoose.Schema({

    fname : {type: String, required: true},
    lname : {type: String, required: true},
    email : {type: String, required: true},
    gender : {type: String, default: "male"},
}, {timestamps: true})

mongoose.models ={}
export const User = mongoose.model('User',schema)
