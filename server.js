const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.set('view engine', 'pug');

app.use((req, res, next) => {
  console.log(`Request User Agent: ${req.headers['user-agent']}`);
  next();
})

app.get('/home/:id', (req, res) => {
  res.render('index', {
    title: `CoralRoad ${req.params.id}`,
    message: `Welcome to Coral Road ${req.params.id}`,
    url: 'http://coralroad.com',
    description: "Travel better together. Get pre-launch VIP access to special deals on Coral Road when two of your friends sign up, and the world's most eco-friendly water bottle from Yuhme to take on your next trip when 10 friends sign up.",
    image : `http://coralroad.com/images/hero.jpg`
  });
});

app.listen(port, () => console.log(`Server running in PORT: ${port}`));
