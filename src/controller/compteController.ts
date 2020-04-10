import bcrypt from "bcrypt";
import { Request, Response } from "express";

const jwtUtils = require('../../utils/jwtUtils');
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
        
        let email: string = req.body.email;
        let mdp: string = req.body.mdp;

        if(email == null || mdp == null){
            return res.status(400).json({'error': 'missing parameters'});
        }
        models.Compte.findOne({
            where: {email: email}
        }).then(function(userfound: any){
            if(userfound){
                bcrypt.compare(mdp, userfound.mdp, function(errBycrypt, resBycrypt){
                    if(resBycrypt){
                        return res.status(200).json({
                            'id': userfound.id,
                            'token': jwtUtils.generateTokenForUser(userfound)
                        });
                    }
                    else{
                        return res.status(403).json({'error': 'invalid password ' + userfound.mdp + ' ' + userfound.pseudo + ' ' + userfound.bcryptedPassword});
                    }
                })

            }else{
                return res.status(404).json({'error': 'user not exist in DB' });
            }
        });
    }
}
