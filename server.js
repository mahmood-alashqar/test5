const express = require('express');
const cors = require('cors');
require('dotenv').config();
const mongoose = require('mongoose');
const PORT = process.env.PORT || 8085;
const DB = process.env.DATABASE_URL;
const app = express();
app.use(cors());
app.use(express.json());

const getAnimation = require('./controllers/starter.controller');
const CRUD = require('./controllers/CRUD.controller');

mongoose.connect(`${DB}`, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});
app.get('/', (req, res) => {
  res.send('okii!!');
})

app.get('/marvel', getAnimation);

app.post('/marvel/fav', CRUD.postAnimation);
app.get('/marvel/fav', CRUD.getAnimation);
app.delete('/marvel/fav/:slug', CRUD.deleteAnimation);
app.put('/marvel/fav/:slug', CRUD.updateAnimation);



app.listen(PORT, () => {
  console.log(`server on ${PORT}`);
})