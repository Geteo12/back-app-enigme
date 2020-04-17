
const express = require('express')
const comptes = express.Router()
const cors = require('cors')
const jwt = require('jsonwebtoken')

const Compte = require('../../models/compte')
comptes.use(cors())

process.env.SECRET_KEY = 'secret'

comptes.post('/register', (req, res) => {
  
  const compteData = {
    pseudo: req.body.pseudo,
    email: req.body.email,
    mdp: req.body.mdp
  }

  Compte.findOne({
    where: {
      email: req.body.email
    }
  })
    //TODO bcrypt
    .then(compte => {
      if (!compte) {
        Compte.create(compteData)
          .then(compte => {
            let token = jwt.sign(compte.dataValues, process.env.SECRET_KEY, {
              expiresIn: 1440
            })
            res.json({ token: token })
          })
          .catch(err => {
            res.send('error: ' + err)
          })
      } else {
        res.json({ error: 'Ce compte existe déjà' })
      }
    })
    .catch(err => {
      res.send('erreur: ' + err)
    })
})

comptes.post('/login', (req, res) => {
    Compte.findOne({
    where: {
      email: req.body.email,
      mdp: req.body.mdp
    }
  })
    .then(compte => {
      if (compte) {
        let token = jwt.sign(compte.dataValues, process.env.SECRET_KEY, {
          expiresIn: 1440
        })
        res.json({ token: token })
      } else {
        res.send("Ce compte n'existe pas")
      }
    })
    .catch(err => {
      res.send('erreur: ' + err)
    })
})

comptes.get('/profile', (req, res) => {
  var decoded = jwt.verify(req.headers['authorization'], process.env.SECRET_KEY)

  Compte.findOne({
    where: {
      id: decoded.id
    }
  })
    .then(compte => {
      if (compte) {
        res.json(compte)
      } else {
        res.send("Ce compte n'existe pas")
      }
    })
    .catch(err => {
      res.send('error: ' + err)
    })
})

module.exports = comptes