const express = require('express');
const router = express.Router();

const {
    getPeople,
    createPeople,
    updatePeople,
    deletePeople
} = require('./7.3.controllers');


/*
//1.GET
router.get('/', getPeople)
//2.POST
router.post('/', createPeople);
//3.PUT(to UPDATE)
router.put('/postman/:id', updatePeople);
//4.to Delete
router.delete('/postman/:id', deletePeople);
*/

//more easier way to define route methods..
router.route('/').get(getPeople).post(createPeople);
router.route('/postman/:id').put(updatePeople).delete(deletePeople);


module.exports = router;