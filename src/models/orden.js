const mongoose = require('mongoose');
const {schema} = mongoose;

const ordenSchema= new Schema({

});

module.exports=mongoose.model('orden',ordenSchema)