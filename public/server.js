const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const router = express.Router();
const userService = require("../public/services/user.service")

const app = express();

var corsOptions = {
  origin: "http://localhost:4200"
};

app.use(cors(corsOptions));


// parse la requete de type - application/json
app.use(bodyParser.json());

// parse la requete de type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

const db = require("./models");
db.sequelize.sync();
// // drop la table si elle existe déjà
// db.sequelize.sync({ force: true }).then(() => {
//   console.log("Drop and re-sync db.");
// });

// route simple
app.get("/", (req, res) => {
  res.json({ message: "Bienvenue sur Enigma." });
});

app.post("/newUser", (req, res, next) =>{
  const body = req.body;

  const user = userService.create(body);

  return res.status(201).json({ user : user });
});

require("./routes/user.routes")(app);


// setup du port qui va ecouter les requetes
const PORT = process.env.PORT || 4201;
app.listen(PORT, () => {
  console.log(`Le serveur tourne sur le port ${PORT}.`);
});


module.exports= app;