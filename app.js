const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express();
const config = require('./config/Db');
const appRoutes = require('./route/blog.route');
//body-parser
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

//view-engine
app.set('view engine', 'ejs');

app.use(express.static('public'));
//routes
app.use('/', appRoutes);

//database connection
mongoose.Promise = global.Promise;
mongoose.connect(config.DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(result => {
    console.log('Database connected successfully');

}).catch(err => {
    console.log('Unable to connect');

})


//server
const port = process.env.port || 3000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);

})