const db = require("../models/");
const Users = db.users;
const Op = db.Sequelize.Op;

// Créer et Sauvegarder un nouveau user
exports.create = (req, res) => {
  
  if (!req.body.email) {
    res.status(400).send({
      message: "Le contenu ne peut être vide!"
    });
    return;
  }

  if (!req.body.pseudo) {
    res.status(400).send({
      message: "Le contenu ne peut être vide!"
    });
    return;
  }

  if (!req.body.mdp) {
    res.status(400).send({
      message: "Le contenu ne peut être vide!"
    });
    return;
  }

  // Création du User
  const user = {
    email: req.body.email,
    pseudo: req.body.pseudo,
    mdp: req.body.mdp
  };

  // Sauvegarde dans la BD
  Users.create(user)
    .then(data => {
      res.send(data);
      console.log("ON EST DANS LE CONTROLLER");
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Une erreur est survenue lors de la sauvegarde du user!"
      });
    });
};
