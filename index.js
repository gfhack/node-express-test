const express = require('express');
const controller = require('./app/Controllers/Controller')
const app = express();

const bodyParser = require('body-parser');
const multer = require('multer');
const upload = multer();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.listen(3000, () => {
  console.log('listening on 3000')
})

// app.get('/hello', controller.hello);
// app.get('/compute', controller.compute);
// app.get('/countries', controller.countries);
app.get('/users', controller.users);
app.get('/users/1', controller.user);
