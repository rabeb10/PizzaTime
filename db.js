const express = require('express');
const bcrypt = require('bcrypt');
const user = require('~/OneDrive/Bureau/PizzaTime/models/user.js'); 
const routes = express.routes();
const mongoose = require ('mongoose');
const dotenv = require ('dotenv');
const uri = process.env.URI_MONGODB;
const username = process.env.ATLAS_USERNAME;
const pw = process.env.ATLAS_PASSWORD;
uri='mongodb+srv://rabebmersani00:<1234>@cluster0.sobqv.mongodb.net/'

const connectBD=async()=>{
    try{
        await mongoose.connect(uri)
        .then(()=>console.log("established a connection to the database"))
        .catch(err=>console.log("something went wrong when connecting to the database",err))
    }catch(error){
        console.error('erreur de connexion à MongoDB:',error.message)
        process.exit(1);//arrête le processus si la connexion échoue
    }
};
module.exports=connectDB; 