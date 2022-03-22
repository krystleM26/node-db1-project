
const express = require('express')
const Accounts = require('./accounts-model')
const router = require('express').Router()

router.get('/', (req, res, next) => {
Accounts.getAll()
  .then((accounts) => {
    res.status(200).json(accounts)
  })
  .catch((err) => {
    res.status(500).json({
      message: 'Cannot get Accounts'
    })
  })
})

router.get('/:id', (req, res, next) => {
  Accounts.getById()
   
})

router.post('/', (req, res, next) => {
  // DO YOUR MAGIC
})

router.put('/:id', (req, res, next) => {
  // DO YOUR MAGIC
});

router.delete('/:id', (req, res, next) => {
  // DO YOUR MAGIC
})

router.use((err, req, res, next) => { // eslint-disable-line
  // DO YOUR MAGIC
})

module.exports = router;
