import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { Request, Response } from "express";

const models = require('../../models');

module.exports = {

    register: function(req: Request, res: Response){

    let pseudo: string = req.body.pseudo;
    let email: string = req.body.email;
    let mdp: string = req.body.mdp;

    if(pseudo == null || email == null || mdp == null){
        return res.status(400).json({'error': 'missing parameters'});
    }

    // TODO vérifier regex / taille des champs etc
    
    //verifie si le mail est déjà existant
    models.Compte.findOne({
        attributes: ['email'],
        where: {email: email}
    }).then(function(userfound: any){
        if(!userfound){

            bcrypt.hash(mdp, 5, function(err: any, bcryptedPassword: any){
                let newCompte = models.Compte.create({
                    pseudo: pseudo,
                    email: email,
                    mdp: bcryptedPassword
                    
                })
                .then(function(newCompte: any){
                    return res.status(201).json({'id': newCompte.id});
                })
            })
            .catch(function(err: any){
                return res.status(500).json({'error': 'cannot add user'});
            })

        }else{
            return res.status(409).json({'error': 'user already exist' });
        }
    });

},
    login: function(req: Request, res: Response){
        
    }
}