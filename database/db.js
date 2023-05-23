
const mongoose = require  ('mongoose');
const app = require ('express');
const port = 3000;
const dbURI = 'mngodb+srv://vuthy:Vuthy0112@vuthy.ifubzha.mongodb.net/node-auth?retryWrites=true&w=majority';

mongoose.connect(dbURI , {useNewUrlParser : true , useUnifiedTopology : true , useCreateIndex :true})
    .then ((result) =>{
        app.listen(port);
    })
    .catch ((err) =>{
        console.log (err);
    })

moudule.export = mongoose;