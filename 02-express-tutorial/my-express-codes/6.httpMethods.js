const express = require('express')
const app = express()
let { people } = require('./data')

//static assets..
app.use(express.static('./../methods-public/'));

//parse form data..
app.use(express.urlencoded({ extended: false }));

// parse json
app.use(express.json())


//1.GET
app.get('/api/contact/', (req, res) => {
    res.status(200).send('Welcome To Contact Page!!!!');
});


//2.POST
app.post('/login', (req, res) => {
    const { name } = req.body;
    console.log(name);
    if (name) {
        res.status(200).send(`Welcome ${name} !!`);
    } else {
        res.status(401).send('Invalid Credentails..');
    }
});


//Using Postman!

//1.GET
app.get('/api/people', (req, res) => {
    res.status(200).json({ success: true, data: people })
})

//2.POST
app.post('/api/people', (req, res) => {
    const { name } = req.query
    if (!name) {
        return res
            .status(400)
            .json({ success: false, msg: 'please provide name value' })
    }
    res.status(201).json({ success: true, person: name })
});


//3.PUT(to UPDATE)
app.put('/api/postman/people/:id', (req, res) => {
    const { id } = req.params;
    const { name } = req.body

    const person = people.find(person => person.id === Number(id));
    if (!person) {
        return res
            .status(404)
            .json({ success: false, msg: `No person with id : {id}` })
    } else {
        const newPeople = people.map(person => {
            if (person.id === Number(id)) {
                person.name = name;
            }
            return person;
        });
        res.status(200).json({ success: true, person: [...newPeople] })
    }

});

//4.to Delete
app.delete('/api/postman/people/:id', (req, res) => {
    const { id } = req.params;

    const person = people.find(person => person.id === Number(id));
    if (!person) {
        return res
            .status(404)
            .json({ success: false, msg: `No person with id : {id}` })
    } else {
        const newPeople = people.filter(person=>person.id !== Number(id));
        res.status(200).json({ success: true, person: [...newPeople] })
    }

});

app.listen(5000, () => {
    console.log('Listening on port 5000...');
});

