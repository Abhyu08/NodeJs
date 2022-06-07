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

//1.queryStrings...

app.get('/api/products/query', (req, res) => {
    console.log(req.query);
    let sortedJson = [...products];
    const { search, limit } = req.query;

    if (search) {
        sortedJson = sortedJson.filter((data) => {
            return data.name.startsWith(search);
        })
    }
    if (limit) {
        sortedJson = sortedJson.slice(0, Number(limit));
    }

    if (sortedJson.length > 0)
        return res.status(200).json(sortedJson);
    else return res.status(200).json({ success: true, data: [] });

});


app.listen(5000, () => {
    console.log(`Listening on port 5000...`);
});