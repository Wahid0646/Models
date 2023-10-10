const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

const errorController = require('./controllers/error')
const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));


const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');
const contactController = require('./controllers/contactController');
const successController = require('./controllers/successController');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminRoutes);
app.use(shopRoutes);

app.get('/contactus', contactController.getContactUsPage);
app.get('/success', successController.getSuccessPage);

app.use(errorController.get404);

app.listen(3000);
