"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const compteController = require('./controller/compteController');
const apiRouter = require('./apiRouter');
class serverConfig {
    constructor(port) {
        this.port = port;
    }
    start() {
        const app = express_1.default();
        app.use(body_parser_1.default.urlencoded({ extended: true }));
        app.use(body_parser_1.default.json());
        app.get('/', function (req, res) {
            res.send('Serveur NODE EnigmA');
        });
        app.post('/register', apiRouter);
        app.post('/login', apiRouter);
        app.get("/monCompte", apiRouter);
        app.put("/modifUtilisateur", apiRouter);
        app.put("/modifMdp", apiRouter);
        app.listen(this.port, function () {
            console.log('Serveur démarré');
        });
    }
}
exports.default = serverConfig;
