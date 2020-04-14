import { Response, Request } from "express";
import express from "express";
import bodyParser from "body-parser";

const compteController = require('./controller/compteController');

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

        // les routes  en local : localhost:3000/register
        app.route("/register/").post(compteController.register);
        // les routes  en local localhost:3000/login
        app.route("/login/").post(compteController.login);

        app.listen(this.port, function(){
            console.log('Serveur démarré');
        })
    }
  
}