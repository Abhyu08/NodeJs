const express = require('express');
const app = express();

const router = require('./7.1.api-People');
const auth = require('./7.2.auth');

//static assets..
app.use(express.static('./../methods-public/'));

//parse form data..
app.use(express.urlencoded({ extended: false }));

// parse json
app.use(express.json());

//imported routers for authentication..
app.use('/login' , auth);

//outsourced router code to api-People and then later imported :
app.use('/api/people', router);

app.listen(5000, () => {
    console.log('Listening on port 5000...');
});

