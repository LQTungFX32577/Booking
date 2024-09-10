const path = require('path');
const cors = require('cors');
const mongoose = require('mongoose');

const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());
const booking = require('./route/booking');
const admin = require('./route/admin');
const user = require('./route/user');
const User = require('./models/users');
app.use(cors());


app.use((req, res, next) => {
    User.findById('66b62d5d748fdca698944964')
      .then(user => {
        req.user = user;
        next();
      })
      .catch(err => console.log(err));
  });
app.use('/booking',booking);
app.use('/admin',admin);
app.use(user);
app.use('*', (req, res, next) => {
    res.status(404).send('Page Not Found!');
})


mongoose.connect('mongodb+srv://tungle:130399@tungledb.b8ta1wp.mongodb.net/Booking')
.then((result) => {
    app.listen(3100);
})
.catch(err => console.log(err)
)

