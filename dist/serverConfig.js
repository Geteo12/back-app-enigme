"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const compteController = require('./controller/compteController');
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
        // les routes  en local : localhost:3000/register
        app.route("/register/").post(compteController.register);
        // les routes  en local localhost:3000/login
        app.route("/login/").post(compteController.login);
        app.listen(this.port, function () {
            console.log('Serveur démarré');
        });
    }
}
exports.default = serverConfig;
