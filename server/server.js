const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config()

const app = express();
const Db = process.env.ATLAS_URI;

// Connexion à la base de données MongoDB
mongoose.connect(Db, 
{ useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connexion à MongoDB réussie'))
  .catch(() => console.log('Connexion à MongoDB échouée'));

// Configuration de l'application Express
app.use(express.json());

// Routes
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Démarrage du serveur
const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Le serveur est lancé sur le port ${port}`));

