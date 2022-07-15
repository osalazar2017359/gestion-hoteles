'use strict'

require('dotenv').config()
//console.log(process.env)

var mongoose = require('mongoose');
var app = require('./app');
var user = require('./controllers/user.controller')
var port = 3800;

mongoose.Promise = global.Promise;
mongoose.set('useFindAndModify', false);
mongoose.connect(process.env.DATABASE_CONNECT , {useNewUrlParser: true, useUnifiedTopology: true})
    .then(()=>{
        user.initAdmin();
        console.log('connect to DB');
        app.listen(process.env.PORT || port, ()=>{
            console.log('server express running')
        })
    }).catch((err)=>console.log('connection error to DB', err))

    