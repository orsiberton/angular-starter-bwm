const express = require('express');
const Rental = require('../models/rental');
const router = express.Router();

router.get('', function (req, res) {
    Rental.find({}, function (err, rentals) {
        res.json(rentals);
    });
});

router.get('/:id', function (req, res) {
    Rental.findById(req.params.id, function (err, rental) {
        if (err) {
            res.status(422).send({
                errors: [
                    {
                        title: 'Rental Error!',
                        detail: 'Could not find Rental!'
                    }]
            });
        }

        res.json(rental);
    });
});

module.exports = router;