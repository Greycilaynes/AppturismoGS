const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://gsprojetista:zJF5Wqja2vU77TgY@cluster0.dbd3n.mongodb.net/', { useNewUrlParser: true});

var Schema = mongoose.Schema;

const cliente = new Schema ({

    cpf        : { type:Number, required: true},
    nome       : { type:String, required: true},
    cep        : { type:Number },
    telefone   : { type:Number, required: true},
    email      : { type:String, required: true}
})

const ClienteModel = mongoose.model('clientes', cliente);


module.exports = {ClienteModel}
