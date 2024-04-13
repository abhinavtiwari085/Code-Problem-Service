const mongoose = require('mongoose');

const problemSchema= new mongoose.Schema({
    title:{
        type: String,
        required:[true,'title cannot be empty'],
    }, 
    description:{
        type: String,
        required:[true,'description cannot be empty'],
    },
    difficulty:{
        type: String,
        enum:['easy','medium','hard'] ,
        required:[true,'difficulty cannot be empty'], 
        default:'easy',
    },
    testCases:[
        {
            input:{
                type:String,
                required:true,
            }, 
            output: {
                type:String,
                required:true, 
            } 
        }
    ],
    editorial: {
        type:String, 
        
    } 
})

const Problem=mongoose.model('Problem',problemSchema) 
//to convert problem schema into model we use mongoose.model ...first parameter is name of the model we want to create and thenthe schema of that collection..if we want to query mongodb for probelm like get,update ,add we will use Probwlm object created 

module.exports = Problem;