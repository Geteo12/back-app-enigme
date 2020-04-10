"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const bcrypt_1 = __importDefault(require("bcrypt"));
const models = require('../../models');
module.exports = {
    register: function (req, res) {
        let pseudo = req.body.pseudo;
        let email = req.body.email;
        let mdp = req.body.mdp;
        if (pseudo == null || email == null || mdp == null) {
            return res.status(400).json({ 'error': 'missing parameters' });
        }
        // TODO vérifier regex / taille des champs etc
        //verifie si le mail est déjà existant
        models.Compte.findOne({
            attributes: ['email'],
            where: { email: email }
        }).then(function (userfound) {
            if (!userfound) {
                bcrypt_1.default.hash(mdp, 5, function (err, bcryptedPassword) {
                    let newCompte = models.Compte.create({
                        pseudo: pseudo,
                        email: email,
                        mdp: bcryptedPassword
                    })
                        .then(function (newCompte) {
                        return res.status(201).json({ 'id': newCompte.id });
                    });
                })
                    .catch(function (err) {
                    return res.status(500).json({ 'error': 'cannot add user' });
                });
            }
            else {
                return res.status(409).json({ 'error': 'user already exist' });
            }
        });
    },
    login: function (req, res) {
    }
};
