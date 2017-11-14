var express = require('express');
var router = express.Router();
var mongodb = require('mongodb');
var MongoClient = mongodb.MongoClient;
var dbUrl = 'mongodb://localhost:27017/pokemonDB';
var collection;

MongoClient.connect(dbUrl, function (err, db) {
  if (err) {
    console.log('Unable to connect to the mongoDB server. Error:', err);
  } else {
    console.log('Connection established to', dbUrl);
    
    collection = db.collection('pokemons');

    // for(var key in pokemon) {
    //   collection.insert(pokemon[key], function (err, result) {
    //     if (err) {console.log(err)};
    //   });
    // }
  }
});

/* GET home page. */
router.get('/', function(req, res, next) {
  res.sendFile('index.html', { root: 'public' });
});

router.get('/pokemon',function(req,res,next) {
  var query = { name: req.query.q};

  collection.find(query).toArray(function(err,result) { 
    if (err) return console.error(err); 
    else {
      res.status(200).json(result[0]);
    }
  });
});

router.post('/pokemonSprite',function(req, res) {
  console.log("In Pokemon Post");
  console.log(req.body);
  var url = req.body['spriteURL'];

  var query = {name: req.body['name']};
  var newValues = { $set: { sprite: url}};
  collection.updateOne(query, newValues, function(err,res) {
    if (err) return console.error(err);
    else {
      res.end('{"success" : "Updated Successfully", "status" : 200}');
    }
  });
});

module.exports = router;
