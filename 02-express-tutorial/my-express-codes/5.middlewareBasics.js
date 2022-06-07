const express = require('express');
const app = express();

//middleware concept.

//mdlware code //common functionality used by routers.. 
// const time = new Date().getTime();
// const url = req.url;
// const method = req.method;
// console.log(time);


//if we want to have logger code for every routers ,we cant have code in every get-req
// app.get('/', (req, res) => {
//     const time = new Date().getUTCFullYear();
//     const url = req.url;
//     const method = req.method;
//     console.log(time,url,method);
//     res.send('<h1>HelloWorld!</h1>');
// });

//to avoid writing repeatative cde
//declare common logger function

const logger = (req, res, next) => {
    const time = new Date().getTime();
    const url = req.url;
    const method = req.method;
    console.log('First logger  :' ,time, url, method);
    next();//MUST // othewise process will stuck here!
    // return if we want to stop the cycle
}

//1.Direclty mentioning in get-function
app.get('/about', logger, (req, res) => {
    res.send('<h1>About!</h1>');
});


//2.making it available throughout the routers...
app.use(logger);

app.get('/api/version1', (req, res) => {
    res.send('<h1>Version1!</h1>');
});


//3.making it available throughout for the specific routers..
app.use('/reviews',logger);
 //will work for url /reviews*

app.get('/reviews/:userID', (req, res) => {
    res.send('<h1>reviews!</h1>');
});

//request ==> middleware ==> response
//4.making it available throughout for the specific routers by importing code from middlewareFile ..
const log = require('./middlewareCodes/middlwareLogger');
const authorize = require('./middlewareCodes/mdlwareAuth');

app.use('/reviews1' , [log , authorize]);
// app.use(middleware) uses middleware
app.get('/reviews1/', (req, res) => {
    res.send('<h1>reviews1!</h1>'); 
});


app.listen(5000, () => {
    console.log('Listening to port 5000...');
})