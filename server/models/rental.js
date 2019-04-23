const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const rentalSchema = new Schema({
    title: { type: String, require: true, max: [128, 'Title is too long, max is 128 chars'] },
    city: { type: String, require: true, lowercase: true },
    street: { type: String, require: true, min: [4, 'Street is too short, min is 4 chars'] },
    category: { type: String, require: true, lowercase: true },
    image: { type: String, require: true },
    bedrooms: { type: Number, require: true },
    shared: { type: Boolean, require: true },
    descriptions: { type: String, require: true },
    dailyRate: { type: Number, require: true },
    createdAt: { type: Date, require: true, default: Date.now }
});

module.exports = mongoose.model('Rental', rentalSchema);