const mongoose = require('mongoose')
const Schema = mongoose.Schema

const home = new Schema({

    serUmTitulo:{
        type: String
    },
    serDescricao:{
        type: String
    },
    serPreco:{
        type: String
    },
    serAtual:{
        type: String,
    },
    serDoisTitulo:{
        type: String
    },
    serDoisDescricao:{
        type: String
    },
    serDoisPreco:{
        type: String,
    },
    serDoisAtual:{
        type: String
    },
    serTresTitulo:{
        type: String
    },
    serTresTitulo:{
        type: String,
    },
    serTresDesc:{
        type: String
    },
    serTresPreco:{
        type:String
    },
    serTresAtual:{
        type:String
    }

}, {
    timestamps: true,
})

mongoose.model('Home', home)