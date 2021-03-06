import { Response, Request } from "express";
import express from "express";
import bodyParser from "body-parser";

const compteController = require('./controller/compteController');
const apiRouter = require('./apiRouter');

export default class serverConfig {

    readonly port: number;
    

    constructor (port: number){
        this.port = port
    }

    start () {
        const app = express ();

        app.use(bodyParser.urlencoded({ extended: true}));
        app.use(bodyParser.json());

        app.get('/', function(req: Request, res: Response){
            res.send('Serveur NODE EnigmA');
        })

        app.get('/enigme', apiRouter);
        app.get('/indice', apiRouter);

        app.post('/register', apiRouter);
        app.post('/login', apiRouter);
        app.get("/monCompte", apiRouter);
        app.put("/modifUtilisateur", apiRouter);
        app.put("/modifMdp", apiRouter);


        app.listen(this.port, function(){
            console.log('Serveur démarré');
        })
    }
  
}