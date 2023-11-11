const mongoose = require('mongoose');
const {Schema} = mongoose;

const ordenSchema= new Schema({
    cliente:{type:String},
    nOrden:{type:String},
    fIngreso:{type:String},
    descripcion:{type:String},
    fEntrega:{type:String},
    notas:{type:String},
    status:{type:String},
    responsables:{type:String},
    fEntregaReal:{type:String},
    tDiseño:{type:String},
    tProduccion:{type:String},
    tMaquila:{type:String},
    


});

module.exports=mongoose.model('orden',ordenSchema)