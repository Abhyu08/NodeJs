let { people } = require('./data');

const getPeople = (req, res) => {
    res.status(200).json({ success: true, data: people })
}

const createPeople = (req, res) => {
    const { name } = req.query
    if (!name) {
        return res
            .status(400)
            .json({ success: false, msg: 'please provide name value' })
    }
    res.status(201).json({ success: true, person: name })
}

const updatePeople = (req, res) => {
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

}

const deletePeople = (req, res) => {
    const { id } = req.params;

    const person = people.find(person => person.id === Number(id));
    if (!person) {
        return res
            .status(404)
            .json({ success: false, msg: `No person with id : {id}` })
    } else {
        const newPeople = people.filter(person => person.id !== Number(id));
        res.status(200).json({ success: true, person: [...newPeople] })
    }

}

const authorizePeople = (req, res) => {
    const { name } = req.body;
    console.log(name);
    if (name) {
        res.status(200).send(`Welcome ${name} !!`);
    } else {
        res.status(401).send('Invalid Credentails..');
    }
} 

module.exports = {
    getPeople,
    createPeople,
    updatePeople,
    deletePeople,
    authorizePeople
}