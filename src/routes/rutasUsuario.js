const express=require('express');
const res = require('express/lib/response');
const router= express.Router();
const path = require('path');
const Orden = require('../models/orden');

router.get('/',(req,res,next)=>{
    res.render('inicio');
});

router.post('/registrarOrden', (req, res, next)=>{
    const{cliente,nOrden,fIngreso,descripcion,fEntrega,responsables,fEntregaReal,tDiseño,tProduccion,tMaquila,notas}=req.body;
    const newRegistro = new Orden({cliente,nOrden,fIngreso,descripcion,fEntrega,responsables,fEntregaReal,tDiseño,tProduccion,tMaquila,notas})
    newRegistro.save();
    res.render('inicio');
})

module.exports=router