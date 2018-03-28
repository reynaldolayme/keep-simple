var express = require('express');
var router = express.Router();
var MongoClient = require('mongodb').MongoClient;
var ObjectID = require('mongodb').ObjectID;

const connection = (closure) => {
    return MongoClient.connect('mongodb+srv://reynaldolayme:Amanda.23@cluster0-nebhm.mongodb.net/keep', (err, db) => {
        if(err) {
            return console.log(err);
        }
        closure(db);
    });
}

let response = {
    status: 200,
    message: null,
    data: []
}

var sendError = ()