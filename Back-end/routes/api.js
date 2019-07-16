// Configuration du module
let express = require('express');
let router = express.Router();

let mongodb = require('mongodb');
let assert = require('assert');
let ObjectId = mongodb.ObjectID;
let MongoClient = mongodb.MongoClient;
let mongodbUrl = 'mongodb://localhost:27017/tasks'

// Configuration de la route principale => http://localhost:8080/api/
router.get('/', (req, res, next) => {
  // Ouvrir une connexion sur la base Mongodb
  MongoClient.connect(mongodbUrl, { useNewUrlParser: true } ,(err,client) =>{
		var db = client.db('tasks')
		assert.equal(null,err)
    //Tester la connexion
    if(err){res.send(err)} 
    else {
      db.collection('list').find().toArray((err,tasks)=> {
        if(err){ res.send(err) }
        else { 
          // Envoyer les données au format json
          res.json(tasks)
        }
      });
    }
    client.close();
  });
});

// Export du module
module.exports = router;

