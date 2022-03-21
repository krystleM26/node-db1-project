const express = require("express");

const accountRouter = require('./accounts/accounts-router')

const server = express();

server.use(express.json());

server.use('/api/accounts', accountRouter)

server.use('*', (req,res) => {
    res.status(404).json({
        message: 'Page Not Found'
    })
})

module.exports = server;
