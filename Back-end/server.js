// Import des dépendances
let path = require('path');
let bodyParser = require('body-parser');
let express = require('express');

// Définition du port
let port = 8080;

// Importer les modules de gestion des routes
let front = require('./routes/front');
let api = require('./routes/api');

// Initier le serveur
let app = express();

// Définir le dossier static de la partie frontend
app.use(express.static(path.join(__dirname, 'client')));

// Configurer body-parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

// Lancer le server
app.listen( port, () => console.log('Le serveur est lancé sur le port ' + port) );

// Définir les routes
app.use('/', front);
app.use('/api', api);


