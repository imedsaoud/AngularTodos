// Configurationdu du module
let express = require('express');
let router = express.Router();

// Configuration de la route => http://localhost:8080/
router.get('/',(req, res, next)=> {
  // Envoi du fichier html du dossier /client dans la réponse
  res.render('index.html');
})

module.exports = router;