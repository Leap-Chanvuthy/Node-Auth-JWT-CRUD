
const { Timestamp } = require('mongodb');
const mongoose = require ('mongoose');
const recipeSchema = new mongoose.Schema ({
    filename :{
        type : String,
        required : true,
    },
    path :{
        type : String,
        required : true,
    },
    name :{
        type : String,
        required : true,
    },
    description :{
        type : String,
        required : true,
    },
    price :{
        type : Number,
        required : true,
    }
    
} , Timestamp);

    const Recipe = mongoose.model('recipe' , recipeSchema);
    module.exports = Recipe;