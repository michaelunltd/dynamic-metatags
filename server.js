const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.set('view engine', 'pug');

app.get('/', (req, res) => {
  res.render('index', {
    title: 'CoralRoad',
    message: 'Welcome to Coral Road',
  });
});

app.listen(port, () => console.log(`Server running in PORT: ${port}`));
