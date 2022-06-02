const express = require('express');
const app = express();
const { products } = require('./data');

// app.get('/', (req, res) => {
//     res.json(products);
// });

app.get('/', (req, res) => {
    res.status(200).send('<h1>HomePage</h1> <a href="/api/products/">products</a>');
});

app.get('/api/products/', (req, res) => {
    //to get required fields from Json array saving  user bandwidth
    //filter out fields
    const newProducts = products.map((product) => {
        const { id, name, price } = product;
        return { id, name, price };
    });
    res.json(newProducts);
});

/*
//to get singleProduct
app.get('/api/products/1', (req, res) => {

    const limitedProduct = products.map((product) => {
        const { id, name, price } = product;
        return { id, name, price };
    });
    const singleProduct = limitedProduct.find((product) => product.id === 1);
    res.json(singleProduct);
});
*/

//to get specificProducts //Implementaion to avoid doing for all existing products seperately : 
//can immplement generalized code using routers..
app.get('/api/products/:productID', (req, res) => {
    //request object gives value to productID field

    console.log(req.params.productID);
    // url : 'localhost:5000/api/products/22' --> assigned 22 -> productID
    const limitedProduct = products.map((product) => {
        const { id, name, price } = product;
        return { id, name, price };
    });

    const singleProduct = limitedProduct.find((product) => product.id == req.params.productID);
    if (!singleProduct)
        res.status(404).send(`Resource Not Found!`);
    else res.json(singleProduct);


});


app.get('/api/products/:productID/reviews/:userId/comments/', (req, res) => {
    
    res.json();
});


app.listen(5000, () => {
    console.log(`Listening on port 5000...`);
});