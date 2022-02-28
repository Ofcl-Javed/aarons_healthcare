const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');
const port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.set('view engine', 'ejs');
app.set('views', 'views');

const hospitalRoutes = require('./routes/hospital');


const hospitalController = require('./controllers/hospital');
const errorController = require('./controllers/error');



app.use(hospitalRoutes);

app.use(errorController.get404);
app.listen(port, () => console.log(`Example app listening on port ${port}!`))



 