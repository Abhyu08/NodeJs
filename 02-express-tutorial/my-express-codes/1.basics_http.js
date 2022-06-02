const app = require('express')();
// const expres = app();

/*
app.get
app.post
app.put
app.delete
app.use
app.listen
app.all
*/

app.get('/', (req, res) => {
    res.status(200).send('<h1>hello world</h1>');
});
app.get('/about', (req, res) => {
    res.status(200).send('<h1>About Us!</h1>');
});
app.all('*', (req, res) => {
    res.status(404).send('<h1>404!</h1>');
});

app.listen(5000, () => {
    console.log(`Listening to port 5000...`);
})