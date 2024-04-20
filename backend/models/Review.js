const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String },
    deadline: { type: Date, required: true },
    participants: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Employee' }]
});

const Review = mongoose.model('Review', reviewSchema);

module.exports = Review;
