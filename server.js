const express = require('express');
const path = require('path');
const app = express();

// Servir les fichiers statiques depuis le répertoire 'build'
app.use(express.static(path.join(__dirname, 'build')));

// Route simple pour servir index.html
app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Serveur démarré sur le port ${PORT}`);
});
