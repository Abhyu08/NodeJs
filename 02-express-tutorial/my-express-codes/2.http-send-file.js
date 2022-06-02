const express = require('express');
const app = express();
const path = require('path');

app.use(express.static('./static_resources')); //similar to --> static block in java i think

//HomePage--Response--
/*
app.get('/', (req, res) => {
    
    //legacy method
    res.status(200).sendFile(path.resolve(__dirname, './.././navbar-app/index.html'));
    //path.join(__dirname, './.././navbar-app/index.html')

    //1.sendFile --> dumping in static
    //2.SSR-->Server-side-rendering
});
*/
 
app.all('*', (req, res) => {
    res.status(404).send(`Resource Not Found!`);
});

app.listen(5000,()=> {
    console.log(`Listening to port 5000...`);
});
